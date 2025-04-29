#!/usr/bin/env python3
"""
Module that provides a function to insert a document into a MongoDB collection
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a collection based on kwargs
    
    Args:
        mongo_collection: pymongo collection object
        **kwargs: key-value pairs to insert as a document
        
    Returns:
        The new _id of the inserted document
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
