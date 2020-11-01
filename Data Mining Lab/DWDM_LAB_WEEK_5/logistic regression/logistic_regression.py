from __future__ import division
import numpy as np

class LogisticRegressionOVR(object):
    def __init__(self, eta=0.1, n_iter=50):
        self.eta = eta
        self.n_iter = n_iter
    def _sigmoid(self, x):
        return 1 / (1 + np.exp(-x))
    def score(self, X, y):
        return sum(self.predict(X) == y) / len(y)

    def fit(self, X, y):
        X = np.insert(X, 0, 1, axis=1)
        self.w = []
        m = X.shape[0]

        for i in np.unique(y):
            y_copy = np.where(y == i, 1, 0)
            w = np.ones(X.shape[1])

            for _ in range(self.n_iter):
                output = X.dot(w)
                errors = y_copy - self._sigmoid(output)
                w += self.eta / m * errors.dot(X)
            self.w.append((w, i))
        return self
    def _predict_one(self, x):
        return max((x.dot(w), c) for w, c in self.w)[1]

    def predict(self, X):
        return [self._predict_one(i) for i in np.insert(X, 0, 1, axis=1)]

from sklearn import datasets
np.set_printoptions(precision=3)

from sklearn.model_selection import train_test_split
print("for iris dataset")
iris = datasets.load_iris()
X_train, X_temp, y_train, y_temp = \
    train_test_split(iris.data, iris.target, test_size=.4)
X_validation, X_test, y_validation, y_test = \
    train_test_split(X_temp, y_temp, test_size=.5)

logi = LogisticRegressionOVR(n_iter=1000).fit(X_train, y_train)
print("training accuracy: ")
print(logi.score(X_train, y_train))
print("validation  accuracy: ")
print(logi.score(X_validation, y_validation))
predictions=logi.predict(X_test)
print("testing  accuracy: ")
print(logi.score(X_test, y_test))

from sklearn.metrics import confusion_matrix
print("confusion matrix")
print(confusion_matrix(y_test, predictions))


print("for cancer dataset")
iris = datasets.load_breast_cancer()
X_train, X_temp, y_train, y_temp = \
    train_test_split(iris.data, iris.target, test_size=.4)
X_validation, X_test, y_validation, y_test = \
    train_test_split(X_temp, y_temp, test_size=.5)

logi = LogisticRegressionOVR(n_iter=1000).fit(X_train, y_train)
print("training accuracy: ")
print(logi.score(X_train, y_train))
print("validation  accuracy: ")
print(logi.score(X_validation, y_validation))
predictions=logi.predict(X_test)
print("testing  accuracy: ")
print(logi.score(X_test, y_test))

from sklearn.metrics import confusion_matrix
print("confusion matrix")
print(confusion_matrix(y_test, predictions))
