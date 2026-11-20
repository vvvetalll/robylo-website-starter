import asyncio, os
from playwright.async_api import async_playwright
here=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(executable_path="/usr/bin/google-chrome",args=["--no-sandbox"])
        ctx=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=2)
        pg=await ctx.new_page(); await pg.goto("file://"+here+"/mobile.html")
        await pg.evaluate("document.fonts.ready"); await pg.wait_for_timeout(400)
        print(await pg.evaluate("document.documentElement.scrollWidth"), await pg.evaluate("document.body.scrollHeight"))
        await pg.screenshot(path=here+"/big-picture-mobile-390-reference.png",full_page=True)
        await b.close()
asyncio.run(main())
