# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# {name: "", description: "", price: .00, image_url: "", category: "skincare" }
Product.delete_all


Product.create(name: "SkinCeuticals Phyto Corrective Essence Mist 50ml", description: "Give skin a boost of hydration with the SkinCeuticals Phyto Essence Mist. Formulated to strengthen the skin’s barrier, the lightweight facial mist offers an instant soothing effect.", price: 67.00, image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12932548-2534984326440526.jpg", category: "skincare" )
Product.create(name: "Pai Skincare C-2 Believe Vitamin C Brightening Moisturizer 50ml", description: "Imparting a radiance-enhancing effect, the Pai Skincare C-2 Believe Vitamin C Brightening Moisturizer is a multi-performing formula suitable for even the most sensitive of skin.", price: 79.00, image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13870151-2124980389495679.jpg", category: "skincare" )
Product.create(name: "Eminence Organic Skin Care Clear Skin Probiotic Cleanser 8.4 fl. oz", description: "Eminence Organics Clear Skin Probiotic Cleanser purifies your skin without stripping essential moisture for a clearer, more radiant complexion. Crafted with tea tree oil, this face wash neutralizes bacteria to prevent breakouts, while astringent willow bark controls oil production. Lactic acid exfoliates, while cucumber juice tones and shrinks pore size. A biocomplex of vitamins A, C, E, Coenzyme Q10 and antioxidants reduces the visible signs of aging. Soy-free.", price: 48.00, image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12901507-7664871870005221.jpg", category: "skincare" )
Product.create(name: "Obagi Medical Professional-C Serum 20% (1 fl. oz.)", description: "Obagi Professional-C Serum 20% infuses your skin with L-ascorbic acid, the only form of vitamin C suitable for topical application. Designed to penetrate deep into your skin, this vitamin C serum provides effective antioxidant protection from UV damage as it brightens away hyperpigmentation and encourages the growth of collagen and elastin fibers. Hyaluronic acid binds moisture to your skin to prevent dryness.", price: 136.99, image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/11291543-1265002181700054.jpg", category: "skincare" )
Product.create( name: "Paula's Choice CLINICAL Niacinamide 20 Treatment (0.67 fl. oz.)", description: "Achieve a smoother and more radiant complexion with CLINICAL Niacinamide 20% Treatment from Paula's Choice. This advanced, concentrated serum helps to tighten and minimize the appearance of pores and rough bumps caused by age or sun damage. Niacinamide normalizes pore function and protects from further stretching when exposed to damaging UV light, resulting in improved radiance and texture.", price: "52.0", image_url: "https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902766-1164909089232656.jpg", category: "skincare")


# 50.times do 
#     Product.create(
#       name: Faker::Commerce.product_name,
#       description: Faker::Food.description,
#       price: Faker::Commerce.price(range: 0..10.0, as_string: true),
#       image_url: Faker::Avatar.image,
#       category: Faker::Commerce.department(max: 5),   
#     )
# end

puts "✍🏻🗒️ DB seeded!"
