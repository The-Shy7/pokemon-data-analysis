// https://observablehq.com/@the-shy7/cse-412-homework-2@459
import define1 from "./a2166040e5fb39a6@229.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["pokemon@1.csv",new URL("./files/b4b4437c4c61554fbd28a88cbcdaadd4422975d6fd0bfee3d8796e041f2e571ee363b1cb01fd4a6f12faa8dae583066b6d28821670ded1ce11dbc272ddd9f134",import.meta.url)],["single-vs-dual2.png",new URL("./files/5b479d31c174eb90beae851b5c32a4c879151f4582d79956935bd08b3c61dc8fc621e19a34cf2d78a4325679e59461da3e8a50a4aa9d4f45dac2fcc290873b9c",import.meta.url)],["type2-dist1.png",new URL("./files/e7acd782fcb184d178c1d6d43f8c425b64159fb8fa54d7c435e7fba91a4d5bee8b53d023e5f9646d9670ba3352674e298cd5dee8d8d78045c61dfc04715cc128",import.meta.url)],["top10.png",new URL("./files/19f7f8afd5acb0b2adb07a8ab71d8ebb7560b67f7ccfb8a020a488e52789d1de85fd09294d316b7b3b92024b77b238133920fd35aa1dbf70e246ec42584e0c23",import.meta.url)],["norm-vs-legend.png",new URL("./files/ffab3ef7ae735f2027b638138042296012c7e70d1553bd1d33b84f6711a86e7c3469c96857a7f551a8899b71d8ad8094070f01e96cbb9f6ecc3b54b9920adccf",import.meta.url)],["single-vs-dual1.png",new URL("./files/9ea91917a64f49b595ddadee8a2d009ecd0a2b1f8064dddc2cbd1e82b9be6e4a96f4d6f4210e338a535527a2aee33a97e000c4ff6284ccd89bcaab53e4f5d3c9",import.meta.url)],["ln-type1-dist.png",new URL("./files/88fea7fa6b528642fd522add02a4436c5a8e3125081ef37ab5b65bab8f5914021bd6559f34d130f30d6cce9e5d256a6e00fa6be784a1cb1f3ea7987f5b51ab4f",import.meta.url)],["avg-med-bst.png",new URL("./files/ddddee7418c0599cf03ab511f65d4285009c73e1494b563979ed4d8ee2cdd17b9ea2248567421f315f1656ff3cf40ac0268326070e6f17a1388847a6fd0f4792",import.meta.url)],["type-stat.png",new URL("./files/2bd4476df7543c06d602e39a55a22a2a671a8fa91a38b18ab737ceba8668862aa0714dd3e273e74dedf1e842ee34a755044849ff4cc4d64fea2f5ac90206b2d9",import.meta.url)],["type1-dist1.png",new URL("./files/578643f37a0216522c464c735f7c3f21773320ee63a066e2ce3cbd5b3233cc523aabd78931bae77450e45b44b56a23708359307e4309a888ea9ec5ecba06904a",import.meta.url)],["type1-dist2.png",new URL("./files/9adce729a3869e62a6bcd4bf00a68d123f5f550c7184038ff2aca227ed8add4a4e54109dc5df39898b4322f3b0206e9656e02fdd61604541bcef7206296ff32a",import.meta.url)],["pokemon-gen.png",new URL("./files/f0d6e8fa3c788ac348e52dea0fd846ee9e96c1da0a4aad8bed3f52900883463cb2b0317ce120d61e6790243525ac81d35f1721591b40451f8c4910b9eb80eb48",import.meta.url)],["dual-type-dist.png",new URL("./files/e9d035786cd9576b66f6e364961c72a02c742a542baa4e542516e9d37eb31e555bc07104dd03e818b44577ff8c65dd0868e35567f5d16df82836aa00fcc25d71",import.meta.url)],["bst.png",new URL("./files/cf1099e969594c9b1c409748521754b9c5ddff0ed47930a18e1abc5c2f1211a9352dc6c1ef6c8648fea0cd7c5e78d9754d6f1ce1087af6d7178241c5e430aa0d",import.meta.url)],["type2-dist2@2.png",new URL("./files/e7969d1b0a9f926ad9f3c4d2189a5c858c8f0b406967d986eb6bf989471107a799e123e9c86e1eb60e6d3817be7ae0d2561625f8693c89600843333cf9ff5bbd",import.meta.url)],["top10-filter.png",new URL("./files/cb2d7e28c9bea7492bfaa80a8602e462dc38b2bdc65a5b902fca8629bd83400302c36170bcb27c2272d923d8e9d01cce02cc4a54e33e7641b9557386fffce505",import.meta.url)],["dual-type-dist-l.png",new URL("./files/02abd2748347d7b1154348962fa3c07c8ec6482ccbe52556b62bb4d924396bfd605bca79b61df6dc18c3cff8744e55caa75065934d8506886ab3e6906c185dfe",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Analysis of Pokemon`
)});
  const child1 = runtime.module(define1);
  main.import("printTable", child1);
  main.variable(observer()).define(["md"], function(md){return(
md `## Introduction`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Pokemon is a Japanese media franchise managed by The Pokemon Company, a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1995 and is centered on fictional creatures called "Pokemon", which humans, known as Pokemon Trainers, catch and train to battle each other for sport. Game Freak is best known as the primary developer of the Pokemon series of role-playing video games published by Nintendo.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Dataset: Pokemon Data`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`This dataset contains very in-depth information on all 1028 existing Pokemon (including different forms) from generations 1 through 8 (current). It has 1028 rows and 51 columns in total. The data includes stats, weight, height, generation, status (normal or legendary), types, abilities, etc. This CSV dataset is taken from this [GitHub repository](https://github.com/shahinrostami/pokemon_dataset/blob/master/pokemon_gen_1_to_8.csv) repository as [pokemon@1.csv]. Tableau was utilized to construct the various data visualizations that are present within this Observable Notebook.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Analysis questions`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Does Game Freak have specific biases towards types and/or stats in relation to balancing the game?**`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` Intial questions prior to data analysis:
1. What is the proportion of dual-type Pokemon to single-type Pokemon?
2. What is the most common primary typing among all Pokemon?
3. What is the most common secondary typing among all Pokemon?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## Preliminary data analysis`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Let us load the CSV file that we attached in order to preview it later.`
)});
  main.variable(observer("csvTable")).define("csvTable", ["FileAttachment"], async function(FileAttachment){return(
await FileAttachment("pokemon@1.csv").csv()
)});
  main.variable(observer()).define(["md","csvTable"], function(md,csvTable){return(
md` As mentioned before, the dataset contains ${csvTable.length} rows, ${Object.keys(csvTable[0]).length} columns.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Here is a preview of what our dataset looks like:`
)});
  main.variable(observer()).define(["printTable","csvTable"], function(printTable,csvTable){return(
printTable(csvTable.slice(0,13))
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## What is the proportion of dual-type Pokemon to single-type Pokemon?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Before we look over the following visualizations, make note that for a Pokemon to be considered "dual-typed" it must have 2 types associated with it and to be considered "single-typed" it must have only 1 type associated with it. For example, Charmander is just a Fire type Pokemon, thus, it is single-typed. On the other hand, Charizard is a Fire and Flying type, so it is categorized as dual-typed.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("single-vs-dual1.png").image()
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("single-vs-dual2.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `As we can see from the pie charts above, as of the current generation (generation 8), there are more dual-typed Pokemon than single-typed Pokemon. Dual-type Pokemon take up slightly above 5% more of all current existing Pokemon compared to single-types. The numerical difference is only 56 Pokemon. However, this difference can be considered negligible since there is always the possiblity of a new generation of Pokemon releasing, so this difference may not last forever. For now, let us examine the individual types themselves.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What is the most common primary typing among all Pokemon?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `For those unfamiliar with the series, Pokemon types are properties for Pokemon and their moves. As of generation 8, there are 18 types, as listed to the right. Most of these were introduced during generation 1, but the Dark and Steel types were introduced in generation 2 and the Fairy type was introduced in generation 6.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `A Pokemon may have either one or two types: For instance, Charmander is a Fire type, while Bulbasaur is both a Grass type and a Poison type. With the current 18-type system, there are a total of 324 possible ways to assign types to Pokemon, with 171 unique combinations. As of generation 8, 154 different type combinations have been used.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `The primary type is the Pokemon's first listed type within the Pokedex (in this case, the dataset). If it exists, the secondary type is second listed type within the Pokedex for dual-type Pokemon. These are mainly used for categorizing and there is no difference between Pokemon who have the same two types but different orderings. For example, if a Pokemon is a Fire-Flying type, then it is the same as a Flying-Fire type, but it is categorized differently based on primary type.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("type1-dist1.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `The number of Pokemon in each primary type are not distributed evenly. In the bar chart above, numerically, we see that Water is the most common primary typing with Normal being the next. It is interesting to note that if we add the totals of Water and Normal typings, it is greater than the total of the Grass, Bug, and Psychic typings combined. Currently, in terms of primary types, we can that there is a very large skew towards Water, Normal, Grass, and Bug. These might be a consequence of a design decision, since a lot of the time in-game take place in forests and similar locations.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("type1-dist2.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `By looking at the proportions, the Flying type is by far the least represented primary type since it does not even make 1% of all current Pokemon. However, this can be attributed to Flying being used as a common secondary type for many Pokemon, which we will explore later on. Fairy is also similar to the Flying type in this respect as it is used more as a secondary type for Pokemon rather than a primary type. However, we should note that the Fairy is the most recent type that was introduced, which was during generation 6 or around 2013. Thus, it has not had as much time to have more Pokemon added to its typing as the older types.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What is the most common secondary typing among all Pokemon?`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("type2-dist1.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Here, we can see that the "None" field has the highest frequency. However, we already know this from our pie chart observing the distribution of dual-type and single-type Pokemon, which also told us that there more dual-type Pokemon than single-type Pokemon. By ignoring the "None" category, we can see that the Flying type is the most common secondary typing among all dual-type Pokemon, even though it was interestingly the least represented primary type.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("type2-dist2@2.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `We also see that even though Fairy is the most recently introduced type, it has become the second most represented secondary type for dual-type Pokemon at almost 4%. This can be attributed to many older Pokemon receiving the Fairy type upon its introduction and more Fairy type Pokemon being added in newer generations which accounts for this representation. It is also interesting to note that even though Water, Normal, Bug, Fire, Electric, Rock, and Dark were among the top nine represented primary types, they are in the bottom nine in terms secondary type representation.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Out of the top nine most represented primary types, Psychic and Grass remains in the nine most represented secondary types, being the 4th and 9th most represented. In the case of Psychic, it's high representation in both primary and secondary types seems to indicate high popularity and a common a choice for the developers to assign a typing to a Pokemon. In addition, we can see that even though Dragon, Poison, Fighting, and Steel were in the eight least represented primary types, they are among the eight most represented secondary types, which tells us these types seems to be more common among dual-type Pokemon. It is also worth noting that Ice seems to be an unpopular choice for a typing since it is the 3rd least represented primary type and 6th least represented secondary type.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What is the most common dual typing?`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("dual-type-dist.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `As we know, Flying is by far the most common secondary type. From this stacked bar chart, we notice that Normal and Flying is the most common dual typing among Pokemon. In addition, we see that Flying is used in 17 out of the 18 types as a secondary typing for dual-type Pokemon, which further indicates how popular Flying is as a choice for a second type. We also notice that Water has the most existing type combinations for dual-types with 15 unique dual-typings where Water is the primary type, which is to be expected since Water is the most represented primary type as of generation 8. `
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Surprisingly, Rock also has as much variety as Water in terms of the number of unique dual-typings with 15 combinations where it is the primary type, even though Rock is currently the eigth most represented primary type. In terms of dual-type combinations, it was also surprising to see that there are only 2 unique combinations where Fairy is the primary type and that a majority of these Fairy Pokemon are single-typed. However, Fairy is popular choice a second type with it being represented in 12 of the 18 types and it is tied for being the third most used secondary typing along with Ghost.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Speaking of Ghost, even though we saw that Ghost is the eighth least represented secondary type, it is surprisingly used as a secondary typing in 12 out of the 18 types like Fairy. To further indicate it as popular type choice, Psychic is used in 13 of the 18 types as a secondary typing, which makes it the second most used along with Dragon and Steel. The Dragon type was also very surprsing in terms of how many types use it as a secondary typing even though Dragon has relatively "average" representation with it being the twelfth most represented primary type and eighth most represented secondary type.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What is the distribution of legendary Pokemon?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Legendary Pokemon are a group of incredibly rare and often very powerful Pokemon. No explicit criteria defines what makes a Pokemon a Legendary Pokemon. Instead, the only way to identify a Pokemon as belonging to this group is through statements from official media, such as the games or anime.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Mythical Pokémon are a related but separate group of Pokemon, which are usually event-exclusive within the video games. In Western language media, Mythical Pokemon are considered to be Legendary Pokemon; in Japanese media, the two groups have always been considered distinct. However, in our case, we will treat Legendary Pokemon and Mythical Pokemon as one group which will be the Legendary/Mythical category that will frequently appear in the visualizations.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("norm-vs-legend.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `There is a very large difference between the number of Legendary Pokemon (84) and normal Pokemon (806). Legendary Pokemon only make up approxiametly 8.17% of all current Pokemon. This distribution makes sense since Legendary Pokemon are meant to be very rare within the series.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("ln-type1-dist.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `When looking at the distribution of Legendary Pokemon among the primary types, it was very surprising to see that 35% of the Dragon type are Legendary Pokemon even though the type itself has slightly below average representation as a primary type. We also see that a majority of Legendary Pokemon have Psychic as their primary type and that it makes up approxiametly 34% of all Pokemon with that primary type.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `It is surprising to note that even though Water and Normal are by far the most popular primary types, very few of them are Legendary Pokemon. It seems to be the case that the number of Legendary Pokemon are relatively evenly distributed amongst all 18 types with Psychic and Dragon being outliers.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("dual-type-dist-l.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `In this distribution of dual-types, specifically of Legendary Pokemon, we see with Psychic as the primary type, there are 9 unique dual-type combinations, thus, making it the most diverse. With Dragon as the primary type, there are 6 unique dual-type combinations, making it the second most diverse. It is actually somewhat surprising to see that Dragon is the only secondary type for some of the primary types such as Ghost and Poison. It is also surprising to notice that Psychic is only represented as a secondary type in only Dragon, Steel, and Normal, despite it being such a popular/common typing among all Pokemon. It is worth noting that Dragon and Psychic is the currently the most represented dual-typing with 4 Legendary Pokemon sharing it. Another thing to note is that Flying is represented in 9 out of the 18 types as a secondary typing, which still makes it the most common secondary typing even when we are looking at just the Legendary Pokemon. With these observations we have made so far, there seems to be some bias in favor of Psychic, Dragon, and Flying when giving Pokemon their types due to the similar noticeable trends that keep appearing.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What is the "strongest" Pokemon type based on base stat totals?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `For those unfamiliar with Pokemon stats, each Pokemon has 6 basic stats represented numerically. HP stands for Hit Points, the Pokemon health. Attack signifies how much damage can it do, and it’s compared to the defense of the enemy’s Pokemon. Special attack is similar to normal attack, but it’s compared to the Special Defense. Speed indicates which Pokemon attacks first in a given round. Finally, the base stat total is just the sum of these 6 stats, which usually indicates how strong an individual Pokemon is. Higher base stat totals tell us a Pokemon is much stronger than those with lower base stat totals.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("type-stat.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `In this bar chart, we observed the average base stat totals of each type, where the type variable took both primary and secondary types into consideration. Clearly, we can see that Dragon is by far the strongest type in terms of average base stat totals. This can be attributed to many factors. One factor is the existence of "pseudo-legendaries", which are an special unofficial class Pokemon that have base stat totals of 600. Many of these pseudo-legendaries tend to be Dragon types and competitive staples on many teams. For example, Garchomp, which is a Dragon and Ground dual-type Pokemon from generation 4, has a base stat total of 600 and is one of these pseudo-legendaries. Other pseudo-legendaries include: Dragonite, Tyranitar, Salamence, Metagross, Hydreigon, Goodra, Kommo-o, and Dragapult. Only Tyranitar and Metagross are not Dragon type Pokemon out of the pseudo-legendaries that currently exist. Another factor is the amount of Dragon type Legendary Pokemon that exist, in which we saw that Dragon was the second most common type for a Legendary type. Legendary Pokemon tend to have base stat totals above 600 and sometimes breaking the 700 mark. There are many more Dragon type Pokemon that have large base stat totals, but it would take too long to list them all. With these large base stat totals accounted for, it makes sense that the Dragon type is the "strongest" on average. It is worth noting that the Fairy type was introduced in generation 6 in order to act as a "hard counter" to the Dragon type due to this noticeable power difference between it and the other types.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Unsurprisingly, we see that Psyshic is the second strongest type in terms of base stat totals, which makes sense we have seen that Psychic is very popular/common typing and a majority of Legendary Pokemon are a part of the Psychic type. It was very surprising to see Steel as the third strongest type because of it's low representation as a primary type, however, this high base stat total can attributed to common traits found amongst most Steel Pokemon which is their very high defensive stats. Many Steel types exhibit very high Defense, Special Defense, and HP. Along with Steel being the fourth most common type for Legendary Pokemon, this contributes to its high average.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `We also see that Ice is the fourth weakest on average, but this is somewhat expected due to Ice being unpopular as a primary and secondary type. Below Ice, note that Grass, Normal, and Bug are the weakest on average. As we saw before, these three types were amongst the most common primary types by far. However, many of these Pokemon tend to be Pokemon found early throughout the video games and are meant to act as beginner-friendly Pokemon. These Pokemon usually evolve quickly, but they fall off later in playthroughs of the games since they have low base stat totals and are quickly replaced with stronger Pokemon.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Are there less new Pokemon being released every successive generation?`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("pokemon-gen.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `It is also important that we look at how many new Pokemon are introduced in each generation since we will be comparing them to each other in terms of their power levels and stats. The number of Pokemon per generation seems to follow a “tick-tock” distribution where each even generation has a significantly lower number of new Pokemon. However, it seems to be the case that after generation 5 there is not as much new Pokemon being released per new generation where generations 6-8 have not broken the 100 new Pokemon mark. We must keep this in mind since it may become the case that Game Freak are releasing fewer Pokemon in the most recent generations, however, these Pokemon may just be stronger on average than older Pokemon. We will look into stat distributions to see if this may be the case.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Does each new generation "power creep" the previous generation?`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("avg-med-bst.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `We will now observe stat trends throughout each generation of Pokemon to discern the possibility of power creep. “Power creep” is the idea that each new version or generation is stronger than the previous one, typically to help sell new editions. This is a significant problem in many card games and competitive games. From the graphs, we observed both the mean and median base stat totals throughout each generation. Surprisingly, the base stat totals seem to be relatively consistent for all generations. If power creep did in fact exist, then there would be a more exponential increase generation by generation, however, we do not see that here. It is interesting to note that in both mean and median, there was a slight jump during generation 4 and after that generation the mean and median base stat total tends to be greater than the first three generations. This does not immediately indicate power creep, but it is a slight upwards trend in terms of the power level of newer Pokemon. However, as we noted before, the more recent generations have begun to release fewer new Pokemon than older generations, so it is interesting to see that the mean and median of these generations are greater than most of the older generations.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## What are the top 10 strongest Pokemon in terms of base stat totals?`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Another small note for readers unfamiliar the concept of mega evolutions and primal reversions. Mega evolution is a temporary transformation introduced in generation 6 that affects certain Pokemon. Mega-Evolved Pokemon are identified by having "Mega" in front of their name. A Mega-Evolved Pokemon has different base stats, with the exception of HP, and can have a different ability and type from its non-Mega-Evolved form. Every Mega-Evolved Pokemon has a base stat total 100 points higher than that of its base form. On the other hand, primal reversions are similar to mega evolutions in that it is a transformation that increases a Pokemon's base stat total by 100. However, only two Pokemon can utilize primal reversion, which are Groudon and Kyogre.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("top10.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `In this stacked bar chart, we observe the top 10 strongest individual Pokemon in terms of their base stat totals, where each stat is characterized by a different color. As we see here, the top five are dominated by Mega-Evolved Pokemon and the two primal forms. This is highly expected because Mewtwo, Rayquaza, Groudon, and Kyogre are already Legendary Pokemon that have extremely high base stats and these transformations just added 100 more to their original base stat totals. From this chart, we see that the maximum base stat total so far is 780 which is attained by the three Mega-Evolved Pokemon. It is worth noting that there are no Non-Legendary Pokemon (even their Mega-Evolved forms) present within the top 10, which makes sense because Legendary Pokemon have the advantage of having higher base stat totals than most Pokemon.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Note that the Dragon (Mega Rayquaza, Ultra Necrozma, Zygarde Complete Forme) and Psychic (Mega Mewtwo X, Mega Mewtwo Y, Ultra Necrozma) types dominate this top 10 with each type taking 3 spots, which makes sense considering the previous trends we noticed when observing the type distributions and the stat distributions among the types. Aside from those two types, Steel also take up two spots (Zacian Crowned and Zamazenta Crowned). This representation tends to fall in line with the order of the strongest types, where we saw that Dragon, Psychic, and Steel were the top 3. However, this bar chart is including mega evolutions and primal reversions, which skews the top 10 in favor of those Legendary Pokemon with transformations on top of their already high stats. Let us now observe the same top 10, but excluding the mega evolutions and primal reverisons.`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("top10-filter.png").image()
)});
  main.variable(observer()).define(["md"], function(md){return(
md `By exluding the mega evolutions and primal reversions, the top 10 changes drastically. Dragon types (Ultra Necrozma, Zygarde Complete Forme, Black Kyurem, White Kyurem, Eternatus, Dialga) dominate the top 10 much more with 6 of them being present. It is surprising to see with our exclusions, both forms of Kyurem are in the top 10, so the Ice type takes 2 spots in the top 10, despite Ice being one of the weaker types on average. With the addition of Dialga, Steel now takes 3 spots in this top 10. With the loss of Mega Mewtwo, Psychic only takes 2 spots (Ultra Necrozma, Dawn Wings Necrozma). Even with the addition of Ice in the top 10, the top 3 most represented types are still Dragon, Steel, and Psychic which still coincides with three strongest types on average. This may indicate the developers' bias towards giving these types the stronger Pokemon. It is also worth noting that Arceus, a generation 4 Pokemon, is the sole outlier of the Normal type since it is in the top 10 even with the inclusions of the transformations and it was the consensus strongest Pokemon until the addition of Ultra Necrozma in generation 7. Note that many Pokemon tie with Dawn Wings Necrozma and Dialga for the ninth and tenth spot, so they are not the consensus 9th and 10th strongest Pokemon, however, it is surprising to note that only 1 Non-Legendary ties for 10th, which is Slaking (refer to the chart in the appendix).`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `Notice that in the first chart with the transformations that Mewtwo is the only generation 1 Pokemon (with two mega evolutions), there are 3 generation 3 Pokemon (Rayquaza, Groudon, and Kyogre), and only 1 generation 4 Pokemon (Arceus). So, the first four generations take 6 spots of the top 10. However, if we exclude the transformations, there are only 2 generation 4 Pokemon (Arceus and Dialga) present in the top 10, while the rest are post generation 4. This seems to indicate many of the strongest Pokemon were introduced post generation 4. Even if we included the transformations, we have to remember that mega evolutions and primal reversions were introduced as generation 6 mechanics, so we could classify those Pokemon under generation 6, which further gives credence to the idea that the stronger Pokemon were introduced post generation 4.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Conclusions`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `We originally set out to answer the following question: **does Game Freak have specific biases towards types and/or stats in relation to balancing the game?** From our analysis and observations of the various trends and distributions, we cannot say for certainty that Game Freak is definitely biased, but there seems to be indications of preferences with certain types. For example, we saw that the Dragon type is by far the strongest type on average and a majority of the top 10 strongest Pokemon are Dragon types, despite it's slightly below average representation as a primary and secondary type among all Pokemon. In addition, the Psychic type has been shown to be a very popular choice for primary and secondary typings along with it being one of the strongest types and having the most Legendary Pokemon with the typing. Even though there is no noticeable power creep each generation, it seems to be the case that many of the strongest Pokemon (including their transformations) were introduced post generation 4. All in all, Game Freak have been continuing the same trends that we noted in our analysis, but we cannot claim that they are biased.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `## Appendix`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Dataset:** [https://github.com/shahinrostami/pokemon_dataset/blob/master/pokemon_gen_1_to_8.csv](https://github.com/shahinrostami/pokemon_dataset/blob/master/pokemon_gen_1_to_8.csv)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md `**Base stat totals of every Pokemon (in order):**`
)});
  main.variable(observer()).define(["FileAttachment"], function(FileAttachment){return(
FileAttachment("bst.png").image()
)});
  return main;
}
