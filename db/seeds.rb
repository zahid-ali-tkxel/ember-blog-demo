# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Post.create(title: 'What is the most compressed file ever?',
    author: 'Wenceslao Terra',
    intro: 'There is a zip bomb called 42.zip. The file is 42.374 bytes when zipped, and 4.503.599.626.321.920 bytes (4.5 petabytes) when unzipped',
    extended: 'The file contains 16 zipped files, which again contains 16 zipped files, which again contains 16 zipped files, which again contains 16 zipped, which again contains 16 zipped files, which contain 1 file, with the size of 4.3GB.')

Post.create(title: 'What impact will the events at the end of Game of Thrones Season 4, Episode 8 have on the story?',
    author: 'Kelsey L. Hayes',
    intro: 'What impact will Oberyns death have on the story? In what way is their death connected to the future course of events?',
    extended: 'There is quite a bit of fallout from it. Perhaps the biggest, most obvious fallout is that Tyrion now faces a death sentence. But it has an impact on Dorne itself, too. Oberyns brother Doran runs a much cooler head (the Martells seem to be one extreme or the other: passionate hotheads or cool cucumbers, nothing in between), but Oberyns daughters, the Sand Snakes, and Dorans daughter, Arianne, will be somewhat less than pleased about what happened to him. There is also still the matter of Gregor being the one to murder Elia and for Tywin to have been the one to give the order (or the OK) to do so, along with the deaths of Rhaenys and Aegon Targaryen, Doran and Oberyns niece and nephew. Now that Gregor has confessed and Oberyn is dead, Dorne has added animosity with the Lannisters, and they are still currently in the possession of Myrcella Baratheon, Cersei and Jaimes daughter and Tommens sister.That, plus a few other developments next season, will show that Dorne is a big damn deal. I will say that it is a much bigger deal than its late arrival to the party would suggest. It also has a very fascinating history; Dorne alone withstood Aegon Is invasion and only Dorne was able to kill one of his dragons.')

Post.create(title: 'What is the most bizarre job interview you have ever been party to?',
    author: 'Nitin Gupta',
    intro: 'I was interviewing someone and ask them if they owned a lot of  game systems and their response was: "I have owned every game system since the Super Nintendo except PSP. I was excited for it and then I played Death, Jr. and I hated that game so much I decided the system sucked.',
    extended: 'So I turned around and pulled my deluxe edition of Death, Jr. off my desk and said, accurately, "Really? What did not you like about it, that was my game!" And it was, I was one of the prime creators behind that game.Later in the interview I asked what her best and worst moments in the game industry were. I forget what the best was, but for the worst she was like Uh, it just happened with that Death, Jr. thing... (Epilogue: She got the job because a) she was the best qualified candidate,  b) I am not vindictive and c) her graceful recovery from an embarrassing moment demonstrated effectively that she did well in high-pressure situations.)')
