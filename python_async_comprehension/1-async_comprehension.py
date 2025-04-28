#!/usr/bin/env python3
"""
Async generator that yields a random number
"""
from typing import List
import asyncio

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collects 10 random numbers using an async comprehension
    over async_generator, then returns the 10 random numbers.
    """
    return [num async for num in async_generator()]
