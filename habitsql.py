import os
import sqlite3

class Database:
    
    #creates a data base connection and stores it as a class attribute
    #if reset is set to true it deletes old database and creates a fresh one
    def __init__(self, reset = False):
        
        #if reset is true and database exists remove it
        if(reset == True):
            if os.path.exists('habits.db'):
                os.remove('habits.db')

        self.conn = sqlite3.connect('habits.db') #creates and opens new database connection

    #create tables
        #habit table
            #cols: id, habit, category, frequency (daily, weekly, monthly), streak
        #category table
            #cols: category id, category name
    def create_tables(self):
        
        #Habit table
        self.conn.execute("""CREATE TABLE IF NOT EXISTS Habits 
                 ( ID     INTEGER NOT NULL,
                   HABIT  VARCHAR NOT NULL,
                   CATEGORY  VARCHAR,
                   FREQUENCY  VARCHAR NOT NULL,
                   STREAK    INTEGER NOT NULL,
                   PRIMARY KEY (ID) );""" )
        
        #Category table
        self.conn.execute("""CREATE TABLE IF NOT EXISTS Categories 
                 ( ID     INTEGER NOT NULL,
                   CATEGORY_NAME VARCHAR,
                   PRIMARY KEY (ID) );""" )
        
    
    #set items
    # def __setitem__(self, table, values):
    #   temp = len(values)
    #   str = "(" + ",".join(["?"]*temp) + ")"
    #   query = f"INSERT INTO {table} VALUES {str}"
    #   cursor = self.conn.cursor()
    #   cursor.execute(query,values)
    #   self.conn.commit()
    
    #add habits
    def add_habit(self, name, frequency, streak):
        cursor = self.conn.cursor()
        query = "INSERT INTO Habits (HABIT,FREQUENCY,STREAK) VALUES (?,?,?)"  
        params = (name,frequency,streak) 
        cursor.execute(query,params)
      
        # id = cursor.execute("""SELECT last_insert_rowid();""").fetchone() #getting id
        print(cursor.execute("SELECT * FROM Habits").fetchall())
    
    # add category
    def add_category(self, name):
        cursor = self.conn.cursor()
        query = "INSERT INTO Categories (CATEGORY_NAME) VALUES (?)"  
        params = (name,) 
        cursor.execute(query,params)
      
        # id = cursor.execute("""SELECT last_insert_rowid();""").fetchone() #getting id
        print(cursor.execute("SELECT * FROM Categories").fetchall())
    
    
if __name__ == "__main__":
    db = Database()
    db.create_tables()
    db.add_habit("Read","Daily",0)
    db.add_category("Learning")
    db.add_category("Tech")
    
