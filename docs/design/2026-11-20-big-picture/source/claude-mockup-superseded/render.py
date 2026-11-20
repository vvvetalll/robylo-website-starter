import asyncio, os
from playwright.async_api import async_playwright
here=os.path.dirname(os.path.abspath(__file__))
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        for name,w,h,s in [("big-picture-desktop-1440",1440,900,1),("big-picture-mobile-390",390,844,2)]:
            ctx = await b.new_context(viewport={"width":w,"height":h}, device_scale_factor=s)
            pg = await ctx.new_page()
            await pg.goto("file://"+here+"/index.html")
            await pg.evaluate("document.fonts.ready"); await pg.wait_for_timeout(400)
            print(name, await pg.evaluate("document.documentElement.scrollWidth"), await pg.evaluate("document.fonts.check('700 40px Manrope')"))
            await pg.screenshot(path=f"{here}/{name}.png", full_page=True)
            await ctx.close()
        await b.close()
asyncio.run(main())
