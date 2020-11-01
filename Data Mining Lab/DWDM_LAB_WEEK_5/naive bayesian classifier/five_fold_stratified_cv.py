import pandas as pd # Import Pandas library 
import numpy as np # Import Numpy library
 

 
def get_five_folds(instances):

    # Shuffle the data set randomly
    instances = instances.sample(frac=1).reset_index(drop=True)
 
    # Record the number of columns in the data set
    no_of_columns = len(instances.columns) # number of columns
 
    # Record the number of rows in the data set
    no_of_rows = len(instances.index) # number of rows
 
    # Create five empty folds (i.e. Panda Dataframes: fold0 through fold4)
    fold0 = pd.DataFrame(columns=(instances.columns))
    fold1 = pd.DataFrame(columns=(instances.columns))
    fold2 = pd.DataFrame(columns=(instances.columns))
    fold3 = pd.DataFrame(columns=(instances.columns))
    fold4 = pd.DataFrame(columns=(instances.columns))
 
    # Record the column of the Actual Class
    actual_class_column = no_of_columns - 1
 
    # Generate an array containing the unique 
    # Actual Class values
    unique_class_list_df = instances.iloc[:,actual_class_column]
    unique_class_list_df = unique_class_list_df.sort_values()
    unique_class_list_np = unique_class_list_df.unique() #Numpy array
    unique_class_list_df = unique_class_list_df.drop_duplicates()#Pandas df
 
    unique_class_list_np_size = unique_class_list_np.size
 
    # For each unique class in the unique Actual Class array
    for unique_class_list_np_idx in range(0, unique_class_list_np_size):
 
        # Initialize the counter to 0
        counter = 0
 
        # Go through each row of the data set and find instances that
        # are part of this unique class. Distribute them among one
        # of five folds
        for row in range(0, no_of_rows):
 
            # If the value of the unique class is equal to the actual
            # class in the original data set on this row
            if unique_class_list_np[unique_class_list_np_idx] == (
                instances.iloc[row,actual_class_column]):
 
                    # Allocate instance to fold0
                    if counter == 0:
 
                        # Extract data for the new row
                        new_row = instances.iloc[row,:]
 
                        # Append that entire instance to fold
                        fold0.loc[len(fold0)] = new_row
                                     
                        # Increase the counter by 1
                        counter += 1
 
                    # Allocate instance to fold1
                    elif counter == 1:
 
                        # Extract data for the new row
                        new_row = instances.iloc[row,:]
 
                        # Append that entire instance to fold
                        fold1.loc[len(fold1)] = new_row
                                     
                        # Increase the counter by 1
                        counter += 1
 
                    # Allocate instance to fold2
                    elif counter == 2:
 
                        # Extract data for the new row
                        new_row = instances.iloc[row,:]
 
                        # Append that entire instance to fold
                        fold2.loc[len(fold2)] = new_row
                                     
                        # Increase the counter by 1
                        counter += 1
 
                    # Allocate instance to fold3
                    elif counter == 3:
 
                        # Extract data for the new row
                        new_row = instances.iloc[row,:]
 
                        # Append that entire instance to fold
                        fold3.loc[len(fold3)] = new_row
                                     
                        # Increase the counter by 1
                        counter += 1
 
                    # Allocate instance to fold4
                    else:
 
                        # Extract data for the new row
                        new_row = instances.iloc[row,:]
 
                        # Append that entire instance to fold
                        fold4.loc[len(fold4)] = new_row
                                     
                        # Reset counter to 0
                        counter = 0
         
    return fold0, fold1, fold2, fold3, fold4