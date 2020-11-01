import pandas as pd  
import numpy as np 
import five_fold_stratified_cv
import naive_bayes
from pandas import DataFrame
from sklearn.metrics import confusion_matrix

 
ALGORITHM_NAME = "Naive Bayes"
SEPARATOR = ","	
def main():
 
	print("Welcome to the " +  ALGORITHM_NAME + " Program!")
	print()
	data_path = 'iris.data'
	pd_data_set = pd.read_csv(data_path, sep=SEPARATOR)
	trace_runs_file = 'iris_traces.txt' 
	outfile_tr = open(trace_runs_file,"w") 
	test_stats_file = "iris_test_statistics.txt"
	outfile_ts = open(test_stats_file,"w")
	NO_OF_FOLDS = 5
	fold0, fold1, fold2, fold3, fold4 = five_fold_stratified_cv.get_five_folds(
		pd_data_set)
 
	training_dataset = None
	test_dataset = None
	accuracy_statistics = np.zeros(NO_OF_FOLDS)
	for experiment in range(0, NO_OF_FOLDS):
 
		print()
		print("Running Experiment " + str(experiment + 1) + " ...")
		print()
		outfile_tr.write("Running Experiment " + str(experiment + 1) + " ...\n")
		outfile_tr.write("\n")
		if experiment == 0:
			test_dataset = fold0
			training_dataset = pd.concat([
			   fold1, fold2, fold3, fold4], ignore_index=True, sort=False)				  
		elif experiment == 1:
			test_dataset = fold1
			training_dataset = pd.concat([
			   fold0, fold2, fold3, fold4], ignore_index=True, sort=False) 
		elif experiment == 2:
			test_dataset = fold2
			training_dataset = pd.concat([
			   fold0, fold1, fold3, fold4], ignore_index=True, sort=False) 
		elif experiment == 3:
			test_dataset = fold3
			training_dataset = pd.concat([
			   fold0, fold1, fold2, fold4], ignore_index=True, sort=False) 
		else:
			test_dataset = fold4
			training_dataset = pd.concat([
			   fold0, fold1, fold2, fold3], ignore_index=True, sort=False) 

		y1 = test_dataset.iloc[:, -1]
		accuracy, predictions, learned_model, no_of_instances_test = (
			naive_bayes.naive_bayes(training_dataset,test_dataset))
 
		predictions['Prediction Correct?'] = predictions[
			'Prediction Correct?'].map({1: "Yes", 0: "No"})
		y2=predictions.iloc[:,-2]
		print("Accuracy:")
		print(str(accuracy * 100) + "%")
		print()
		print("Classifications:")
		print(predictions)
		print()
		print("Learned Model (Likelihood Table):")
		print(learned_model)
		print()
		print("Number of Test Instances:")
		print(str(no_of_instances_test))
		print() 
 
		outfile_tr.write("Accuracy:")
		outfile_tr.write(str(accuracy * 100) + "%\n\n")
		outfile_tr.write("Classifications:\n")
		outfile_tr.write(str(predictions) + "\n\n")
		outfile_tr.write("Learned Model (Likelihood Table):\n")
		outfile_tr.write(str(learned_model) + "\n\n")
		outfile_tr.write("Number of Test Instances:")
		outfile_tr.write(str(no_of_instances_test) + "\n\n")
		accuracy_statistics[experiment] = accuracy
 
	outfile_tr.write("Experiments Completed.\n")
	print("Experiments Completed.\n")
	outfile_ts.write("----------------------------------------------------------\n")
	outfile_ts.write(ALGORITHM_NAME + " Summary Statistics\n")
	outfile_ts.write("----------------------------------------------------------\n")
	outfile_ts.write("Data Set : " + data_path + "\n")
	outfile_ts.write("\n")
	outfile_ts.write("Accuracy Statistics for All 5 Experiments:")
	outfile_ts.write(np.array2string(
		accuracy_statistics, precision=2, separator=',',
		suppress_small=True))
	outfile_ts.write("\n")
	outfile_ts.write("\n")
	accuracy = np.mean(accuracy_statistics)
	accuracy *= 100
	outfile_ts.write("Classification Accuracy : " + str(accuracy) + "%\n")
	print()
	print("----------------------------------------------------------")
	print(ALGORITHM_NAME + " Summary Statistics")
	print("----------------------------------------------------------")
	print("Data Set : " + data_path)
	print()
	print()
	print("Accuracy Statistics for All 5 Experiments:")
	print(accuracy_statistics)
	print()
	print()
	print("Classification Accuracy : " + str(accuracy) + "%")
	print(confusion_matrix(y1,y2))
	outfile_tr.close()
	outfile_ts.close()
 
main()