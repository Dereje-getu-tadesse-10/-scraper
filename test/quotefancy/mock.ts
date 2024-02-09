export const mock = `
  <div class="wallpaper scrollable" id="wall45765">
     <div class="frame">
        <a href="https://quotefancy.com/quote/76125/Taylor-Swift-Happiness-and-confidence-are-the-prettiest-things-you-can-wear"><img class="load-lazily" data-original="https://quotefancy.com/media/wallpaper/800x450/45765-Taylor-Swift-Quote-Happiness-and-confidence-are-the-prettiest.jpg" alt="Taylor Swift Quote: “Happiness and confidence are the prettiest things you can wear.”" data-wallpaper-id="45765"></a>
        <div class="hud controls" id="hud45765">
        </div>
     </div>
  </div>
  <div class="q-container">
     <div class="q-wrapper">
        <p class="quote-p">2. “<a class="quote-a" href="https://quotefancy.com/quote/76125/Taylor-Swift-Happiness-and-confidence-are-the-prettiest-things-you-can-wear">Happiness and confidence are the prettiest things you can wear.</a>”</p>
        <p class="author-p">— <a href="https://quotefancy.com/taylor-swift-quotes">Taylor Swift</a></p>
        <p class="author-p">Featured in:
           <a href="https://quotefancy.com/happiness-quotes">Happiness Quotes</a>, <a href="https://quotefancy.com/confidence-quotes">Confidence Quotes</a>
        </p>
     </div>
  </div>
`

export const mockEmptyHtml = `
  <div class="wallpaper scrollable" id="wall45765">
     <div class="frame">
        <div class="hud controls" id="hud45765">
        </div>
     </div>
  </div>
  <div class="q-container">
     <div class="q-wrapper">
        <p class="quote-p">2. “<a class="quote-a"></a>”</p>

     </div>
  </div>
`

export const mockHtmlWithoutLinkAndImage = `
  <div class="wallpaper scrollable" id="wall45765">
     <div class="frame">
        <a><img class="load-lazily"/></a>
        <div class="hud controls" id="hud45765">
        </div>
     </div>
  </div>
  <div class="q-container">
     <div class="q-wrapper">
        <p class="quote-p">2. “<a class="quote-a">Happiness and confidence are the prettiest things you can wear.</a>”</p>
        <p class="author-p">— <a href="https://quotefancy.com/taylor-swift-quotes">Taylor Swift</a></p>
        <p class="author-p">Featured in:
           <a>Happiness Quotes</a>, <a >Confidence Quotes</a>
        </p>
     </div>
  </div>
 `
