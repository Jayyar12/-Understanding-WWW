const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  console.log("Page loaded. Clicking hamburger menu...");
  await page.click('#mobile-menu-toggle');
  
  // Wait a moment for state update
  await new Promise(r => setTimeout(r, 500));
  
  const menu = await page.$('#mobile-menu');
  if (menu) {
    const isVisible = await page.evaluate(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0 && window.getComputedStyle(el).display !== 'none';
    }, menu);
    console.log("Mobile menu is in DOM. Visible?", isVisible);
    
    // Check if links are inside
    const linksText = await page.evaluate(el => el.innerText, menu);
    console.log("Menu text:", linksText);
  } else {
    console.log("Mobile menu NOT found in DOM after click.");
  }
  
  await browser.close();
})();
