# upagri

Steps to generate website: 
 1. run npm install
 2. npm build
 3. Upload dist/ directory to netlify 
 
 ## Directory Structure
 
 All pages for website are located under `src/pages`
 
 For example, `src/pages/exhibition-rooms/food-and-nutritional-diets/` contains all the pages for exhibition room **Food and Nutritional Diets**
 
 Individual pages are created by creating a file inside these folders like this:
 
 `src/pages/exhibition-rooms/food-and-nutritional-diets/confidence-and-mindfulness-in-food-and-healthy-quality.astro`
 
 Complete Directory structure is shown as below
 ```
├── about.astro
├── contact-us.astro
├── exhibition-rooms
│   ├── food-and-nutritional-diets
│   │   ├── confidence-and-mindfulness-in-food-and-healthy-quality.astro
│   │   ├── index.astro
│   │   └── the-many-meanings-of-good-food-in-the-city.astro
│   ├── greener-cities
│   │   ├── future-impacts-of-urban-and-peri-urban-agriculture-on-carbon-stock-and-land-surface-temperatures-in-india.astro
│   │   ├── index.astro
│   │   ├── innovative-ways-for-water-management.astro
│   │   ├── livestock-waste-recycling-and-sustainable-energy.astro
│   │   └── rooftop-farming-to-beat-the-heat-in-india.astro
│   ├── healthier-happier-citizens
│   │   ├── access-to-food-networking-and-good-health.astro
│   │   ├── beyond-greening-happiness-identity-and-bonding-in-indian-cities.astro
│   │   ├── green-shoots-of-health-happiness-and-wellbeing.astro
│   │   ├── index.astro
│   │   └── life-sustenance-delight-and-stability.astro
│   ├── index.astro
│   ├── labour-and-incomes
│   │   ├── income-food-and-jobs-material-benefits-of-urban-farming-in-indian-cities.astro
│   │   ├── index.astro
│   │   └── reaping-livelihoods-exploring-urban-farming-and-livelihood-generation-in-indian-cities.astro
│   ├── men-and-women-nurturing-edible-cities
│   │   ├── gender-equality-and-obligations-for-agricultural-development.astro
│   │   ├── index.astro
│   │   └── men-and-women-on-the-frontiers-of-urban-agriculture.astro
│   └── space
│       ├── changing-rivers-changing-practices-a-case-of-pune-city.astro
│       ├── index.astro
│       └── land-tenure-security-in-dar-es-salaam-and-morogoro.astro
├── index.astro
├── reading-room.astro
├── showcasing-upa
│   ├── fieldwork-archives-from-bangalore-and-pune.astro
│   ├── gardening-per-square-foot.astro
│   ├── index.astro
│   └── personal-insights-from-dar-es-salaam-and-morogoro.astro
└── thank-you.astro
```

The index.astro specify the top level page at that directory level
 
 Keep in mind the names of the pages should be in kebab-case (For SEO and to avoid ugly percent encoding in the URL) .
 
 ## Images
 
 All images are to be put inside `src/public/assets/` folder, in jpg or png format. Ideally compressed to less than 500kb using squoosh or using export for web in photoshop.
 ## Layout
 
 ### Showcasing UPA
 
 To add more tiles, use the `<Card>` component as shown :
 ```
 <Card
 link="/showcasing-upa/personal-insights-from-dar-es-salaam-and-morogoro"
 image="/assets/showcasing-upa/3.jpg"
 text="Personal Insights from Dar es Salaam and Morogoro, Tanzania"
 ratio="aspect-[3/2]"
 />
 ```
 Here link is equal to the page the card should point to, the image to the cover image for the card in `assets` folder, and text is the caption for the card
 
 ### Exhibition Rooms
 
 To add more tiles, use the `<CardStack>` component inside the `<Stack>` component as shown:
 
 ```
 <CardStack
    img="/assets/8.1/Picture 2.jpg"
    title="Changing Rivers, Changing Practices: A Case of Pune City"
    href="/exhibition-rooms/space/changing-rivers-changing-practices-a-case-of-pune-city"
 />
 ```
 
 ### Individual pages
 
 Each page has a variable `const title` which is used as page title for the browser and from which other properties of the page are derived
 
 For example:
 
 ```
 const title = "Gardening per Square Foot"
 ```
 
 It also uses a `<Title>` component which is used as shown
 
 ```
 <Title
        title={title}
        subtitle="A Field Tour of Gardens in Bengaluru Slums"
        authors="Maitreyi Koduganti, Swarnika Sharma and Amruth Kiran"
    />
```

#### Video Pages

In video pages the `<Video>` component is used as `<Video id="gMeN9BANqvM" />` where the id is the YouTube video id for the same.

The Description for Video Pages goes inside the `<Desc>` tags and uses `<p>` elements to make paragraphs and `<h5>` elements to make Headings.

The `<Back>` button is placed outside the `<Desc>` tags but inside the `<Centered>` layout tags.

#### Photo Essay Pages

In Photo Essay Pages, the Slider component is used as follows :

```
<Slider>
        <ImageSlide src="/path/to/image">
            <Caption> Your Image Caption goes here </Caption>
            <Credit> Your Image Credits go here </Credit>
        </ImageSlide>

        <TextSlide>
            <Quote>
              Your Quoted text goes here
            </Quote>
            <p> Any additional text goes here </p>
        </TextSlide>
</Slider>

```
Keep in mind the `<Slider>` component should be used outside of `<Centered>` tags as it has no margins on the right side of the page

For Photo Essay pages, the `<Back>` button component is placed inside the `<Centered>`tags as shown:

```
 <Centered><Back/></Centered>
```
 
 ### Reading Room
 
 Any more links to be added as `<a>`link inside the `<div>` of each section
 
 
 
