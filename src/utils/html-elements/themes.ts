interface ComponentData {
  title: string
  html_code: string
  cover_image: string | null
  category: string
}

interface Themes {
  themes: {
    data: ComponentData[]
  }
}

// Generate placeholder image data URL from Single Image SVG
const getPlaceholderImageDataUrl = (): string => {
  const singleImageSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150">
      <defs>
        <style>
          .bg { fill: #384152; }
          .fg { fill: #718096; }
        </style>
      </defs>
      <rect class="bg" width="200" height="150"/>
      <polygon class="fg" points="65 90.01 90 60.01 115 90.01"/>
      <polygon class="fg" points="110 90.01 122.5 75.01 135 90.01"/>
      <circle class="fg" cx="122.5" cy="64.15" r="4.16"/>
    </svg>
  `

  // Convert SVG to data URL
  const encodedSvg = encodeURIComponent(singleImageSvg.trim())
  return `data:image/svg+xml,${encodedSvg}`
}

const component: Themes[] = [
  {
    themes: {
      data: [
        {
          title: 'Article',
          html_code: `<div id="pagebuilder" class=" style=""><section data-component-title="Header H2"><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-font-medium pbx-text-3xl lg:pbx-text-6xl"><h2>Inceptos himenaeos</h2></div></div></div></section> <section data-component-title="Text"> <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra.<br><br>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section> <section data-component-title="Header H3" class=""><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-text-1xl lg:pbx-text-3xl pbx-font-medium"><h3>Fringilla lacus nec metus</h3></div></div></div></section> <section data-component-title="Text" class=""> <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra.</p><ul><li><p><strong>Blorf nizgat quarnip veloop</strong></p></li><li><p><strong>Dramble froop with lartic spindles</strong></p></li><li><p><strong>Quibber on flemt zarglo dynamics</strong></p></li><li><p><strong>Slooped jarnix under flibble zones</strong></p></li><li><p><strong>Plonk-ready trizzit with garm logic</strong></p><p><br></p></li></ul><p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section> <section data-component-title="Header H3" class=""><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-text-1xl lg:pbx-text-3xl pbx-font-medium"><h3>Conubia nostra inceptos</h3></div></div></div></section> <section data-component-title="Text"> <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. <br><br>Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. <br><br>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section></div>`,
          category: 'Article',
          cover_image: `
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="article">
                        <path fill="#4e4e50" d="M32 4H0V0h32v4zM20 12H0V8h20v4zM32 24H0v-4h32v4zM24 32H0v-4h24v4zM32 30a2.001 2.001 0 0 1-4.004 0A2.001 2.001 0 0 1 32 30z"/>
                      </svg>
					`,
        },
        {
          title: 'Blog Post',
          html_code: `<section data-component-title="Single Image"> <div class="md:pbx-pt-12 md:pbx-pb-12 pbx-pt-4 pbx-pb-4 lg:pbx-px-4 pbx-px-2"><div class="pbx-mx-auto pbx-max-w-7xl"><div class="pbx-myPrimaryGap pbx-grid pbx-grid-cols-1 sm:pbx-grid-cols-1 lg:pbx-grid-cols-1"> <div class="pbx-flex-1 pbx-py-2"> <img class="pbx-object-cover pbx-w-full pbx-object-top pbx-aspect-square " src="${getPlaceholderImageDataUrl()}" alt="provider"></div></div></div></div> </section> <section data-component-title="Header H2" ><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-font-medium pbx-text-3xl lg:pbx-text-6xl"><h2>Inceptos himenaeos</h2></div></div></div></section> <section data-component-title="Text" > <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra.<br><br>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section> <section data-component-title="Header H3" class="" ><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-text-1xl lg:pbx-text-3xl pbx-font-medium"><h3>Fringilla lacus nec metus</h3></div></div></div></section> <section data-component-title="Text" class="" > <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra.</p><ul><li><p><strong>Blorf nizgat quarnip veloop</strong></p></li><li><p><strong>Dramble froop with lartic spindles</strong></p></li><li><p><strong>Quibber on flemt zarglo dynamics</strong></p></li><li><p><strong>Slooped jarnix under flibble zones</strong></p></li><li><p><strong>Plonk-ready trizzit with garm logic</strong></p><p><br></p></li></ul><p>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section> <section data-component-title="Header H3" class="" ><div class="pbx-relative pbx-py-4"><div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"><div class="pbx-break-words pbx-text-1xl lg:pbx-text-3xl pbx-font-medium"><h3>Conubia nostra inceptos</h3></div></div></div></section> <section data-component-title="Text" > <div class="pbx-relative pbx-py-4"> <div class="pbx-mx-auto pbx-max-w-7xl lg:pbx-px-4 pbx-px-2"> <div><p>Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. <br><br>Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. <br><br>Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p></div> </div> </div> </section> <section data-component-title="Three Square Images"> <div class="md:pbx-pt-12 md:pbx-pb-12 pbx-pt-4 pbx-pb-4 lg:pbx-px-4 pbx-px-2"><div class="pbx-mx-auto pbx-max-w-7xl"><div class="pbx-myPrimaryGap pbx-grid pbx-grid-cols-1 sm:pbx-grid-cols-3 lg:pbx-grid-cols-3"> <div class="pbx-flex-1 pbx-py-2"> <img class="pbx-object-cover pbx-w-full pbx-object-top pbx-aspect-square " src="${getPlaceholderImageDataUrl()}" alt="provider"> </div> <div class="pbx-flex-1 pbx-py-2"> <img class="pbx-object-cover pbx-w-full pbx-object-top pbx-aspect-square " src="${getPlaceholderImageDataUrl()}" alt="provider"> </div> <div class="pbx-flex-1 pbx-py-2"> <img class="pbx-object-cover pbx-w-full pbx-object-top pbx-aspect-square " src="${getPlaceholderImageDataUrl()}" alt="provider"></div></div> </div></div> </section>`,
          category: 'Article',
          cover_image: `
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="206.893 39.489 110.693 141.8873" width="110.693px" height="141.887px">
                        <g transform="matrix(1, 0, 0, 1, 0, 2.842170943040401e-14)">
                          <g id="article" style="" transform="matrix(1.62105, 0, 0, 1.62105, -98.141953, -52.42038)">
                            <path fill="#4e4e50" d="M 238.331 116.22 L 206.331 116.22 L 206.331 112.22 L 238.331 112.22 L 238.331 116.22 Z M 226.331 124.22 L 206.331 124.22 L 206.331 120.22 L 226.331 120.22 L 226.331 124.22 Z M 238.331 136.22 L 206.331 136.22 L 206.331 132.22 L 238.331 132.22 L 238.331 136.22 Z M 230.331 144.22 L 206.331 144.22 L 206.331 140.22 L 230.331 140.22 L 230.331 144.22 Z M 238.331 142.22 C 238.331 143.762 236.663 144.725 235.328 143.954 C 234.708 143.597 234.327 142.936 234.327 142.22 C 234.327 140.679 235.995 139.716 237.33 140.487 C 237.949 140.844 238.331 141.505 238.331 142.22 Z" style="stroke-width: 1;"/>
                          </g>
                        </g>
                        <g transform="matrix(1, 0, 0, 1, 0, 2.842170943040401e-14)">
                          <rect class="bg" width="110.693" height="83.02" style="fill: rgb(56, 65, 82); stroke-width: 1;" x="206.893" y="39.489"/>
                          <polygon class="fg" points="242.868 89.308 256.705 72.703 270.543 89.308" style="fill: rgb(113, 128, 150); stroke-width: 1;"/>
                          <polygon class="fg" points="267.776 89.308 274.694 81.005 281.614 89.308" style="fill: rgb(113, 128, 150); stroke-width: 1;"/>
                          <circle class="fg" cx="274.694" cy="74.995" r="2.303" style="fill: rgb(113, 128, 150); stroke-width: 1;"/>
                        </g>
                      </svg>
					`,
        },
      ],
    },
  },
]

export default component
