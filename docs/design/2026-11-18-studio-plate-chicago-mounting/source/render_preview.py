import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome", args=["--no-sandbox"])
        for name,w,h,s in [("desktop-1440",1440,900,2),("mobile-390",390,844,2)]:
            ctx = await b.new_context(viewport={"width":w,"height":h}, device_scale_factor=s)
            pg = await ctx.new_page()
            await pg.goto("file://" + __import__("os").path.dirname(__import__("os").path.abspath(__file__)) + "/carousel-preview.html")
            await pg.evaluate("document.fonts.ready"); await pg.wait_for_timeout(400)
            info = await pg.evaluate("""() => { const i=document.querySelector('.card .img').getBoundingClientRect();
              return {sw:document.documentElement.scrollWidth, card:[Math.round(i.x),Math.round(i.y),Math.round(i.width),Math.round(i.height)], manrope:document.fonts.check('700 40px Manrope')} }""")
            print(name, info)
            await pg.screenshot(path=f"preview-{name}.png", full_page=True)
            await ctx.close()
        await b.close()
asyncio.run(main())
