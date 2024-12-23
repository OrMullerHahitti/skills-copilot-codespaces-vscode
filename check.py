import pandas as pd
import numpy as np
# function to create random datafram with nxn size
def create_rand_df():
    n = np.random.randint(1, 10)
    df = pd.DataFrame(np.random.randint(0, 100, size=(n, n)))
    return df

# a class that composed of a data frame but i access everything from 1 and not 0
class MyDataFrame:
    def __init__(self, df):
        self.df = df
    def __getitem__(self, key):
        return self.df[key-1]
    def __setitem__(self, key, value):
        self.df[key-1] = value
    def __str__(self):
        return str(self.df)