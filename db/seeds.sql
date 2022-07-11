/* INSERT INTO user(email, username, password)
VALUES 
('bob@bob.com', 'bob_is_cool', 'coolguy123'),
('penny@penelope.com', 'plant_mama', 'monsterra22'),
('john@doe.com', 'jonnyboy22', 'jd1989'),
('jane@doe.com', 'houseplant.lover', 'h0useplantqueen'),
('frank@frankie.net', 'plants4ever', 'frankielovesplants123');

INSERT INTO post(title, image, description, user)
VALUES
('White fluff on my pothos???', image, "Does anyone know what this white fluff is all over my pothos plant? I thought it was just dust but it's definitely not.", 'plant_mama'),
('Dying edges on fiddle leaf fig leaves.', image, "I can't figure out what's killing my fiddle leaf fig. I water it all the time, it has enough humidity, and I play music to it, but it seems so unhappy.", 'bob_is_cool'),
('Pale leaves', image, "What am I doing wrong? My caladium is supposed to be vibrant green and white. In reality, it's pale green (almost yellow), and offwhite.", 'plants4ever'),
('Mold?!', image, "There is literally yellow mold growing on top of the soil of my Dracaena. What would cause this? Does yellow mean something specific? Help. :(", 'jonnyboy22'),
('My peace lily looks so sad!', image, "My peace lily's leaves are sooo droopy. Why is she wilting? Is she depressed?", 'houseplant.lover');

INSERT INTO advice (advice, user, post)
VALUES
("It sounds like you have mealybugs! Look closely at the fluff... there are probably little white bugs in it. Depending on the level of the infestation, you will have a couple options. Regardless of the state of your plant, you will need to make a conconction to spray all over you pothos. The make it, you'll need to combine 1 cup of isopropyl alcohol with a few drops of Dawn, and 32 ounces of water. If this infestation is just starting (there is a very light layer of the fluff), you can easily get rid of them by wiping off the areas of fluff with a wet paper towel and then spraying with the mix. Then you can use the spray often for prevention. Alternatively, if the plant has quite a bit of the white fluff, you will need to use q tips and cotton balls and clean out all the areas including inside the stems, THEN spray. Keep doing this until they go away.", 'bob_is_cool', 1),
("I think you have root rot. If the pot isn't draining like it should, the roots are sitting in stagnant water, which makes the edges of the leaves turn brown like that. Make sure it's in a pot that drains well and that you're not watering it before it dries.", 'jonnyboy22', 2),
("To me, it looks like your plant isn't getting enough sunlight. It doesn't look like you have it near a window. I recommend placing it by or in a window. Only water it when the top two inches of soil are dry. If you feel moisture in the soil, leave it be. But putting it in a spot where it can get a good amount of bright sunlight is probably what you need to do.", 'houseplant.lover', 3),
("So this could be one of five things: contaminated soil, overwatering, poor light, fertilizer issues, or lack of proper aeration. If you've used organic fertilizer, there's a strong chance your soil is contaminated. You'll need to mix 1.5 teaspoons neem oil, 1 teaspoon mild natural soap, and 1 liter of room temperature water. Spray this over the infected plant, removing it from the sun to completely dry. Spray weekly.", 'plants4ever', 4),
('Oh nooo, this happened to mine a while bag and I thought I totally killed it. Turned out it just needed to be watered and was being overly dramatic. :) Give it a good water and check out the difference tomorrow.', 'plant_mama', 5) */