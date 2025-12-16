// Helper function to parse scent notes
const parseScentNotes = (notesText) => {
  if (!notesText) return null;
  
  const topMatch = notesText.match(/Top:\s*([^\n]+)/i);
  const middleMatch = notesText.match(/Middle:\s*([^\n]+)/i);
  const baseMatch = notesText.match(/Base:\s*([^\n]+)/i);
  
  return {
    top: topMatch ? topMatch[1].split(',').map(n => n.trim()).filter(n => n) : [],
    middle: middleMatch ? middleMatch[1].split(',').map(n => n.trim()).filter(n => n) : [],
    base: baseMatch ? baseMatch[1].split(',').map(n => n.trim()).filter(n => n) : []
  };
};

// Helper function to extract inspired by from title
const extractInspiredBy = (title) => {
  const match = title.match(/Inspired by (.+)/i);
  return match ? match[1] : '';
};

// Helper function to map tags to category
const mapTagsToCategory = (tags) => {
  if (!tags) return 'fresh';
  const tagLower = tags.toLowerCase();
  
  if (tagLower.includes('floral') || tagLower.includes('rose') || tagLower.includes('jasmine')) {
    return 'floral';
  }
  if (tagLower.includes('fruity') || tagLower.includes('fruit')) {
    return 'fruity';
  }
  if (tagLower.includes('warm') || tagLower.includes('spicy') || tagLower.includes('tobacco') || tagLower.includes('vanilla') || tagLower.includes('amber') || tagLower.includes('oud')) {
    return 'warm';
  }
  return 'fresh'; // default
};

// Common shipping info and disclaimer
const commonShippingInfo = {
      processingTime: 'Orders are processed within 1-2 business days after payment confirmation. Orders placed on weekends or public holidays will be processed the next business day. Engraving options might take an additional 1-2 days to dispatch. A shipping confirmation with tracking will be sent once dispatched.',
      domesticShipping: 'Standard Courier Delivery: 1-3 business days',
      internationalShipping: 'We currently only ship within Singapore. For inquiries about regional or international orders, please contact contact@fumehub.store.',
      tracking: 'All parcels include tracking. Please allow up to 24 hours for tracking to activate after dispatch.',
      deliveryIssues: 'FUMEHUB is not liable for delays caused by courier services, weather, or other unforeseen circumstances. If your parcel has not arrived within 7 business days of dispatch, contact us with your order number.',
      incorrectAddress: 'Customers are responsible for providing accurate shipping information. Orders returned due to incorrect address will incur a re-delivery charge.',
      failedDeliveries: 'If delivery is unsuccessful and the parcel is returned to us, re-delivery will be arranged at the customer\'s expense.',
      contact: 'For shipping support, email contact@fumehub.store.'
};

const commonDisclaimer = 'At FUMEHUB, transparency is important to us. We wish to clarify how our creations relate to well-known designer perfumes:\n\nOriginal Work: FUMEHUB does not copy or reproduce designer formulas. Our blends are independently composed and stand as our own interpretations.\n\nInspired Creations: Our perfumes draw inspiration from the elegance and character of celebrated fragrances, reimagined through our own artistry to create distinctive scents with their own identity.\n\nFor Reference Only: Mentions of designer or brand names are provided solely to give customers a point of reference regarding the fragrance style. They are not presented as replicas or substitutes.\n\nTrademark Respect: All names and marks remain the property of their respective owners. FUMEHUB has no affiliation, sponsorship, or endorsement from any of the designers or companies whose names may appear in reference.\n\nClarity of Communication: Any brand names used on our site are purely descriptive to assist customers in identifying fragrance families and styles. They should not be interpreted as a claim of association.\n\nWe are committed to providing clear information and distinctive, high-quality perfumes that capture inspiration without causing confusion. Our mission is to offer memorable scents that stand on their own identity.';

export const products = [
  {
    id: 1,
    name: 'Califento',
    inspiredBy: 'Louis Vuitton Pacific Chill',
    description: 'Morning mist rises along Pacific cliffs. Minted citrus, sun-warmed fig, and green sweetness unfold in waves. Califento is a breath of coastal calm and clean renewal.',
    price: 49,
    image: '/califento.jpg',
    category: mapTagsToCategory('citrus, clean, fig, fresh, unisex'),
    viewingCount: 134,
    stockCount: 44,
    scentNotes: parseScentNotes('Top: Citron, Orange, Mint, Lemon\n\nMiddle: Apricot, Basil, Carrot Seed\n\nBase: Fig, Dates, Ambrette'),
    wearGuide: 'Ideal for early starts, casual layers, and post-shower freshness.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 2,
    name: 'Cannes',
    inspiredBy: 'Bleu de Chanel',
    description: 'Côte d\'Azur at twilight. Crisp linen, lemon zest, and a salt-laced breeze at the collar. Cannes evokes polished masculinity that feels cool, luminous, and balanced.',
    price: 39,
    image: '/cannes.jpg',
    category: mapTagsToCategory('aquatic, citrus, fresh, masculine'),
    viewingCount: 134,
    stockCount: 37,
    bestseller: true,
    scentNotes: parseScentNotes('Top: Grapefruit, Lemon, Mint, Pink Pepper\n\nMiddle: Ginger, Jasmine, Nutmeg\n\nBase: Sandalwood, Cedar, Incense, Tonka Bean'),
    wearGuide: 'Perfect for daily wear, both formal and casual. Clean yet complex.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 3,
    name: 'Denvor',
    inspiredBy: 'Dior Sauvage Elixir',
    description: 'Metal cooled by mountain wind. Rough pine cracked underfoot. A portrait of terrain-wild, modern, unsentimental.',
    price: 39,
    image: '/Denvor.jpg',
    category: mapTagsToCategory('masculine, rugged, spicy, warm, woody'),
    viewingCount: 134,
    stockCount: 41,
    scentNotes: parseScentNotes('Top: Grapefruit, Cinnamon, Cardamom\n\nMiddle: Lavender, Coumarin\n\nBase: Amber, Patchouli, Vetiver, Licorice'),
    wearGuide: 'Versatile. Strong projection, ideal for bold presence.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 4,
    name: 'Dohae',
    inspiredBy: 'Louis Vuitton Imagination',
    description: 'Silk glides through desert air. A mirage takes form as citron glows, black tea cools, and cinnamon hums softly beneath it all. Dohae captures airy elegance with a modern edge.',
    price: 49,
    image: '/dohae.jpg',
    category: mapTagsToCategory('airy, citrus, fresh, tea, unisex'),
    viewingCount: 134,
    stockCount: 38,
    scentNotes: parseScentNotes('Top: Citron, Orange, Bergamot\n\nMiddle: Ginger, Neroli, Cinnamon\n\nBase: Black Tea, Guaiac Wood, Ambroxan'),
    wearGuide: 'Best for quiet afternoons or elegant settings with light airflow.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 5,
    name: 'Galren',
    inspiredBy: 'Creed Green Irish Tweed',
    description: 'Green cliffs of Connemara. Rain-washed stone, breeze off the coast, and crushed mint underfoot. Galren distills Celtic clarity into something sharp, clean, and quiet.',
    price: 39,
    image: '/galren.jpg',
    category: mapTagsToCategory('citrus, fresh, green, unisex'),
    viewingCount: 134,
    stockCount: 46,
    scentNotes: parseScentNotes('Top: Lemon, Mint, Verbena\n\nMiddle: Violet Leaf\n\nBase: Sandalwood, Ambergris'),
    wearGuide: 'Fresh and light, ideal for spring mornings or post-rain walks.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 6,
    name: 'Halfyre',
    inspiredBy: 'Penhaligon\'s Halfeti',
    description: 'Dark roses by the river. Saffron heat, oud depth, leather tension. A story in shadow and spice.',
    price: 49,
    image: '/halfyre.jpg',
    category: mapTagsToCategory('floral, leather, oud, spice, unisex, warm'),
    viewingCount: 134,
    stockCount: 43,
    scentNotes: parseScentNotes('Top: Grapefruit, Saffron, Cypress\n\nMiddle: Rose, Nutmeg, Jasmine\n\nBase: Oud, Leather, Amber, Vanilla, Tonka, Sandalwood'),
    wearGuide: 'For deep nights, layered textures, and private conversations.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 7,
    name: 'Havanoir',
    inspiredBy: 'Tom Ford Tobacco Vanille',
    description: 'Havana in velvet hour-tobacco rolled in dim parlors, vanilla drifting over jazz chords, the soft clink of a glass nearby. Grounded in smoky Cuban soul.',
    price: 49,
    image: '/Havanoir.jpg',
    category: mapTagsToCategory('smoky, tobacco, unisex, vanilla, warm'),
    viewingCount: 134,
    stockCount: 49,
    bestseller: true,
    scentNotes: parseScentNotes('Top: Tobacco Leaf, Spices\n\nMiddle: Vanila, Cacoa, Tonka Bean, Tobacco Blossom\n\nBase: Dried Fruits, Woody Notes'),
    wearGuide: 'Perfect for nights, close gatherings, and smoky settings.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 8,
    name: 'Lucerna',
    inspiredBy: 'Creed Silver Mountain Water',
    description: 'Inspired by alpine serenity with crisp air, flowing streams, and snow-kissed peaks. Lucerna reflects purity, tranquility, and timeless cool.',
    price: 49,
    image: '/Lucerna.jpg',
    category: mapTagsToCategory('aquatic, citrus, clean, creed, creed silver mountain water, floral, green, refined, silver mountain water'),
    viewingCount: 134,
    stockCount: 36,
    bestseller: true,
    scentNotes: parseScentNotes('Top: Bergamot, Mandarin Orange\n\nMiddle: Green Tea, Blackcurrant\n\nBase: Musk, Sandalwood, Petitgrain, Galbanum'),
    wearGuide: 'Best for humid days or sunlit moments. A versatile everyday scent with alpine freshness.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 9,
    name: 'Lyona',
    inspiredBy: 'Bianco Latte – Giardini Di Toscana',
    description: 'White sun on cream skin. Lyona distills Bianco Latte into pure soft luxury-caramel and vanilla warmed by amber and musk. A cocoon in scent form.',
    price: 49,
    image: '/lyona.jpg',
    category: mapTagsToCategory('feminine, gourmand, sweet, vanilla, warm'),
    viewingCount: 134,
    stockCount: 37,
    scentNotes: parseScentNotes('Top: Caramel\n\nMiddle: Honey, Coumarin\n\nBase: Vanilla, White Musk'),
    wearGuide: 'Perfect for close spaces, soft knits, and low winter light.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 10,
    name: 'Maraska',
    inspiredBy: 'Xerjoff Erba Pura',
    description: 'Adriatic sun on fruit skin. A breeze from inland orchards. Maraska reframes Erba Pura as a bright, ripe composition-citrus and musk stretched out over golden hours, vivid and free.',
    price: 39,
    image: '/maraska.jpg',
    category: mapTagsToCategory('citrus, fruity, musk, unisex, vibrant'),
    viewingCount: 134,
    stockCount: 43,
    scentNotes: parseScentNotes('Top: Orange, Bergamot, Lemon\n\nMiddle: Fruity Accord\n\nBase: Vanilla, White Musk, Amber'),
    wearGuide: 'Ideal for daylight, outdoor events, and spring/summer energy.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 11,
    name: 'Milano',
    inspiredBy: 'Emporio Armani Stronger With You Intensely',
    description: 'Spice and suede in slow burn. City walks at dusk-Italian charm wrapped in warmth.',
    price: 39,
    image: '/milano.jpg',
    category: mapTagsToCategory('modern, spice, suede, sweet, warm'),
    viewingCount: 134,
    stockCount: 48,
    scentNotes: parseScentNotes('Top: Pink Pepper, Juniper\n\nMiddle: Lavender, Violet, Toffee\n\nBase: Vanilla, Amber, Suede, Tonka'),
    wearGuide: 'Ideal for dinners, dusk, and cool-weather casual layers.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 12,
    name: 'Monel',
    inspiredBy: 'Maison Francis Kurkdjian Baccarat Rouge 540 EDP',
    description: 'Glass heat. Gold shimmer on skin. Amber turned vapor-sweetness held in tension.',
    price: 49,
    image: '/monel.jpg',
    category: mapTagsToCategory('amber, elegant, gold, unisex, warm'),
    viewingCount: 134,
    stockCount: 49,
    bestseller: true,
    scentNotes: parseScentNotes('Top: Saffron, Jasmine\n\nMiddle: Amberwood, Bitter Almond\n\nBase: Cedar, Musk, Ambergris'),
    wearGuide: 'A signature scent for refined presence and luminous character.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 13,
    name: 'Napolia',
    inspiredBy: 'Creed Aventus Absolu',
    description: 'In the heart of Naples, stone walls radiate warmth, citrus peel scents the air, and smoke curls from old chimneys. Napolia channels Mediterranean boldness into a story of fire and heritage.',
    price: 49,
    image: '/Napolia.jpg',
    category: mapTagsToCategory('citrus, fresh, italian, smoky'),
    viewingCount: 134,
    stockCount: 44,
    scentNotes: parseScentNotes('Top: Grapefruit, Bergamot, Pineapple, Pink Pepper\n\nMiddle: Ginger, Cinnamon, Rose, Patchouli\n\nBase: Oakmoss, Sandalwood, Musk, Ambroxan, Tonka Bean'),
    wearGuide: 'Best worn in evenings or colder months. Commands attention.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 14,
    name: 'Naxour',
    inspiredBy: 'Xerjoff Naxos',
    description: 'Sun on limestone. Honey folded into breeze. Golden citrus and grounded warmth-bright, tobacco-rich, timeless.',
    price: 39,
    image: '/naxour.jpg',
    category: mapTagsToCategory('citrus, honey, spicy, tobacco, warm'),
    viewingCount: 134,
    stockCount: 45,
    scentNotes: parseScentNotes('Top: Lemon, Lavender, Bergamot\n\nMiddle: Honey, Jasmine, Cinnamon\n\nBase: Tobacco, Tonka, Vanilla'),
    wearGuide: 'All-season wear for those who balance intensity with charm.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 15,
    name: 'Orlyn',
    inspiredBy: 'Kilian\'s Angels Share',
    description: 'Late night. Glass of cognac. Wood-paneled silence. Oak, cinnamon, praline-every note lands in candlelight.',
    price: 49,
    image: '/orlyn.jpg',
    category: mapTagsToCategory('cognac, spicy, unisex, warm, wood'),
    viewingCount: 134,
    stockCount: 42,
    scentNotes: parseScentNotes('Top: Cognac\n\nMiddle: Cinnamon, Tonka Bean, Oak\n\nBase: Praline, Vanilla, Sandalwood'),
    wearGuide: 'Best worn after dark. Intimate and elegant.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 16,
    name: 'Parisienne',
    inspiredBy: 'Chanel No. 5',
    description: 'Powdered silk and memory. Parisienne draws from aldehydic architecture-florals diffused into light, warmth carried in musk and amber. Timeless without sentiment.',
    price: 49,
    image: '/parsienne.jpg',
    category: mapTagsToCategory('classic, floral, powdery, timeless'),
    viewingCount: 134,
    stockCount: 43,
    bestseller: true,
    scentNotes: parseScentNotes('Top: Aldehydes, Neroli, Ylang-Ylang\n\nMiddle: Jasmine, Rose, Iris\n\nBase: Sandalwood, Musk, Vanilla, Amber'),
    wearGuide: 'Best worn when subtlety is power—quiet elegance in form.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 17,
    name: 'Persia',
    inspiredBy: 'Maison Francis Kurkdjian Oud Satin Mood EDP',
    description: 'Velvet oud. Rose haze. Persia reinterprets opulent restraint-Persian grandeur in smoke and silk. Dark woods, sugared rose, gold-threaded night.',
    price: 49,
    image: '/persia.jpg',
    category: mapTagsToCategory('amber, feminine, floral, oud, rose, warm'),
    viewingCount: 134,
    stockCount: 43,
    scentNotes: parseScentNotes('Top: Violet, Rose\n\nMiddle: Turkish Rose, Vanilla\n\nBase: Oud, Benzoin, Amber, Cedar'),
    wearGuide: 'Suited for formal evenings, winter layering, and statement entries.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 18,
    name: 'Romania',
    inspiredBy: 'Valentino Donna Born in Roma Intense',
    description: 'Amber through cathedral glass. Romana softens into a glowing floral core-vanilla draped in jasmine and resin. Feminine with presence. Grace under flame.',
    price: 39,
    image: '/romania.jpg',
    category: mapTagsToCategory('amber, floral, radiant, vanilla'),
    viewingCount: 134,
    stockCount: 43,
    scentNotes: parseScentNotes('Top: Bourbon Vanilla\n\nMiddle: Jasmine, Amber\n\nBase: Benzoin'),
    wearGuide: 'Suited for evenings, candlelit interiors, or velvet fabrics.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 19,
    name: 'Seoulene',
    inspiredBy: 'Yves Saint Laurent Black Opium',
    description: 'City midnight. Headlights sweep across chrome. Seoulene captures Black Opium\'s nocturnal sweetness-coffee lit by jasmine, vanilla pulsing under metal. A portrait of urban heat and neon scent.',
    price: 49,
    image: '/seoulene.jpg',
    category: mapTagsToCategory('coffee, floral, fruity, sweet, urban'),
    viewingCount: 134,
    stockCount: 40,
    scentNotes: parseScentNotes('Top: Pink Pepper, Pear, Orange Blossom\n\nMiddle: Coffee, Jasmine\n\nBase: Vanilla, Patchouli, Cedar'),
    wearGuide: 'Nightlife-ready. Edgy, warm, and sensual.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  },
  {
    id: 20,
    name: 'Tokyora',
    inspiredBy: 'Prada Paradoxe',
    description: 'Neon dust. Digital petals. Tokyora distills the paradox of soft and sharp into skin-futuristic femininity shaped by citrus, neroli, and light. Powder and signal.',
    price: 49,
    image: '/tokyora.jpg',
    category: mapTagsToCategory('citrus, feminine, floral, fruity, modern'),
    viewingCount: 134,
    stockCount: 10,
    scentNotes: parseScentNotes('Top: Pear, Bergamot, Tangerine\n\nMiddle: Neroli, Jasmine, Orange Blossom\n\nBase: Vanilla, Musk, Amber, Benzoin'),
    wearGuide: 'Great for casual sophistication and layered city moods.',
    ingredients: 'Fragrance oils, perfumer\'s alcohol, distilled water',
    shippingInfo: commonShippingInfo,
    disclaimer: commonDisclaimer
  }
]

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'fresh', name: 'Fresh', description: 'Crisp, clean, and invigorating' },
  { id: 'floral', name: 'Floral', description: 'Elegant blooms and delicate petals' },
  { id: 'fruity', name: 'Fruity', description: 'Vibrant and juicy notes' },
  { id: 'warm', name: 'Warm', description: 'Rich, cozy, and sensual' }
]
