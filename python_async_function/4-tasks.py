#!/usr/bin/env python3
"""
Module for task_wait_n
"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Asynchronous routine that spawns task_wait_random n times with the
    specified max_delay and returns the list of all the delays.
    Args:
        n: number of times to spawn task_wait_random
        max_delay: maximum delay
    Returns:
        List[float]: list of all the delays in ascending order
    """
    delays = []
    tasks = []

    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
