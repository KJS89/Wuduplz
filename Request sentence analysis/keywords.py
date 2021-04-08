# -*- coding: utf-8 -*-
"""


@author: Xinhao Zhang
"""
from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet 
from nltk.stem import WordNetLemmatizer 
from nltk.corpus import stopwords 
import re


r = "\【.*?】+|\《.*?》+|\#.*?#+|[.!/_,$&%^*()<>+""'?@|:~{}#]+|[——！\，。=？、：“”‘’￥……()《》【】]"


stopWord = open("StopWords.txt").read().split()

def sysno(word):
    synonyms = [] 
    for syn in wordnet.synsets(word): 
        for l in syn.lemmas(): 
            synonyms.append(l.name())            
    return synonyms

def pos(word):
    if len(wordnet.synsets(word))>0:    
        syn = wordnet.synsets(word)[0]
        partOfSpeach = syn.pos()
        if partOfSpeach == "n":
            return "noun"
        elif partOfSpeach == "v":
            return "verb"
        elif partOfSpeach == "a":
            return "adjective"
        elif partOfSpeach == "r":
           return "adverb"
        else:
           return " "
    else:
        syn = word
    
def token(word):
    tokens = word_tokenize(word)
    return tokens

def lemmatizer(word):
    lemma = WordNetLemmatizer() 
    return lemma.lemmatize(word)



def stopWordRemove(s):
    stop_words = set(stopwords.words('english'))
    tokens = token(s)
    filter_sentence = []
    for i in tokens:
        if i not in stop_words:
            filter_sentence.append(i)
    return filter_sentence





''' 
    input a sting of stopword and then add it to the 
    stopwords file
'''
def stopWordAdd(w):
    f = open("StopWords.txt","a") 
    f.write(w+ "\n")
    f.close()
    
    
    
''' 
    input a sting of stopword and then delete it from the 
    stopwords file
'''
def stopWordDel(w):
    with open("StopWords.txt", "r") as f:
        lines = f.readlines()
    with open("StopWords.txt", "w") as f:
        for line in lines:
            if line.strip("\n") != w:
                f.write(line)


        
def keyWord(s):
    keyword = []
    s = s.lower()
    s = re.sub(r,'',s)
    keyword = stopWordRemove(s)
    for i in range(len(keyword)):
        keyword[i] = lemmatizer(keyword[i])
    result = []
    for i in keyword:
        if i not in stopWord:
            result.append(i)    
    return result



'''
    input a list of strings if the string's pos is noun
    then return the sysnonym of it otherwise return the 
    string itself
    
'''
def findSyn(words):
    result = []
    for i in words:
        if pos(i) == "noun":
            result.append(sysno(i)[1])
        else:
            result.append(i)
    return result



''' 
    input a string of word and return a list of synonym of the 
    input string
'''
def sysList(keyword):
    return sysno(keyword)

