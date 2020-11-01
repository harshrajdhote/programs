import csv
import random
from sklearn.metrics import confusion_matrix
import pandas as pd 
from pandas import DataFrame
import math
def euclideanDistance(instance1, instance2, length):
	distance = 0
	for x in range(length):
		distance += pow((int(instance1[x]) - int(instance2[x])), 2)
	return math.sqrt(distance)

def loadDataset(filename, split, trainingSet=[] , testSet=[]):
	with open(filename, 'rt') as csvfile:
		lines = csv.reader(csvfile)
		dataset = list(lines)
		for x in range(len(dataset)-1):
			for y in range(4):
				dataset[x][y] = float(dataset[x][y])
			if random.random() < split:
				trainingSet.append(dataset[x])
			else:
				testSet.append(dataset[x])

import operator
def getNeighbors(trainingSet, testInstance, k):
	distances = []
	length = len(testInstance)-1
	for x in range(len(trainingSet)):
		dist = euclideanDistance(testInstance, trainingSet[x], length)
		distances.append((trainingSet[x], dist))
	distances.sort(key=operator.itemgetter(1))
	neighbors = []
	for x in range(k):
		neighbors.append(distances[x][0])
	return neighbors

def getResponse(neighbors):
	classVotes = {}
	for x in range(len(neighbors)):
		response = neighbors[x][-1]
		if response in classVotes:
			classVotes[response] += 1
		else:
			classVotes[response] = 1
	sortedVotes = sorted(classVotes.items(), key=operator.itemgetter(1), reverse=True)
	return sortedVotes[0][0]

def getAccuracy(testSet, predictions):
	correct = 0
	for x in range(len(testSet)):
		if testSet[x][-1] in predictions[x]:
			correct = correct + 1

	return (correct/float(len(testSet))*100)

def main():
	trainingSet=[]
	testSet=[]
	split = 0.67
	print("for Breast Cancer data: ")
	loadDataset('breast-cancer-wisconsin.data', split, trainingSet, testSet)
	print ('Train set: ' + repr(len(trainingSet)))
	print ('Test set: ' + repr(len(testSet)))
	df = DataFrame (testSet)
	y = df.iloc[:, -1]
	
	predictions=[]
	k = 5
	for x in range(len(testSet)):
		neighbors = getNeighbors(trainingSet, testSet[x], k)
		result = getResponse(neighbors)
		predictions.append(result)
	accuracy = getAccuracy(testSet, predictions)
	print("k: "+str(k))
	print()
	print('Accuracy: ' + repr(accuracy) + '%')

	cm_nb = confusion_matrix(y, predictions)
	print("printing confusion matrix for KNN Classifier")
	print(cm_nb)
	trainingSet=[]
	testSet=[]
	split = 0.67
	print("for Breast Cancer data: ")
	loadDataset('breast-cancer-wisconsin.data', split, trainingSet, testSet)
	print ('Train set: ' + repr(len(trainingSet)))
	print ('Test set: ' + repr(len(testSet)))
	df = DataFrame (testSet)
	y = df.iloc[:, -1]
	predictions=[]
	k = 5
	for x in range(len(testSet)):
		neighbors = getNeighbors(trainingSet, testSet[x], k)
		result = getResponse(neighbors)
		predictions.append(result)
	accuracy = getAccuracy(testSet, predictions)
	print("k: "+str(k))
	print()
	print('Accuracy: ' + repr(accuracy) + '%')
	

	cm_nb = confusion_matrix(y, predictions)
	print("confusion matrix for KNN Classifier")
	print(cm_nb)

main()