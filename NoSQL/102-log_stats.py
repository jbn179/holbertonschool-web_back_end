#!/usr/bin/env python3
"""
Script that provides extended stats about Nginx logs stored in MongoDB
Including the top 10 most present IPs
"""
from pymongo import MongoClient


def log_stats():
    """
    Provides enhanced stats about Nginx logs in MongoDB:
    - Total logs
    - Count of logs by HTTP method
    - Count of logs with path=/status
    - Top 10 most present IPs
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    # Get total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Count logs by HTTP method
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # Count status check logs
    status_check = collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")

    # Find top 10 IPs
    print("IPs:")
    pipeline = [
        {"$group": {"_id": "$ip", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
        {"$limit": 10}
    ]
    top_ips = collection.aggregate(pipeline)
    
    for ip_info in top_ips:
        print(f"\t{ip_info.get('_id')}: {ip_info.get('count')}")


if __name__ == "__main__":
    log_stats()
