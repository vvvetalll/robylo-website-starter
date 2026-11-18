import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        ctx = await b.new_context(viewport={"width":1600,"height":1200}, device_scale_factor=1)
        pg = await ctx.new_page()
        await pg.goto("file://" + __import__("os").path.dirname(__import__("os").path.abspath(__file__)) + "/plate.html")
        await pg.wait_for_timeout(500)
        await pg.locator(".plate").screenshot(path="robylo-work-chicago-mounting-plate.png")
        await b.close()
asyncio.run(main())
