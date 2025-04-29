#!/usr/bin/env python3
"""
Module that provides a function to find top students by average score
"""


def top_students(mongo_collection):
    """
    Returns all students sorted by average score

    Args:
        mongo_collection: pymongo collection object

    Returns:
        List of all students sorted by average score in descending order
    """
    # Aggregate pipeline to calculate average score for each student
    pipeline = [
        {
            "$project": {
                "name": 1,
                "topics": 1,
                "averageScore": {
                    "$avg": "$topics.score"
                }
            }
        },
        {
            "$sort": {
                "averageScore": -1
            }
        }
    ]

    # Execute the aggregation pipeline
    return list(mongo_collection.aggregate(pipeline))
