# -*- coding: utf-8 -*-
"""


@author: Xinhao Zhang
"""
from nltk.tokenize import word_tokenize
from nltk.corpus import wordnet 
from nltk.stem import WordNetLemmatizer 
from nltk.corpus import stopwords 
import flask, json
from flask import request
            
def sysno(word):
    synonyms = [] 
    for syn in wordnet.synsets(word): 
        for l in syn.lemmas(): 
            synonyms.append(l.name())            
    return set(synonyms) 

def pos(word):
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
            
def keyWord(s):
    keyword = []
    keyword = stopWordRemove(s)
    for i in range(len(keyword)):
        keyword[i] = lemmatizer(keyword[i])
    return keyword
    

