
Brief background on myself:
I'm a 26-year-old British software developer. I work for a subcontractor of the DLR (the German space agency) here in Munich. I primarily develop full-stack web applications (Scala/Akka backend, Angular/TypeScript frontend). The software I develop is used for mission planning and telemetry analysis of satellite missions including the ISS. My wife Malka is German and lives/studies in Amsterdam. Since the Corona crisis, I've been working entirely remotely and spending time in both cities.

This all started about 6 weeks ago. I was watching my housemate's punk band play a show in a 2-car garage, in the beautiful Bavarian countryside. One of the guys in the band told me a heartwarming anecdote about a show he had been to. Two plainclothes police officers came into this gig to shut it down and bust everyone, but somebody clocked them as cops. The DJ stopped the music, pointed out the officers to the audience, and asked that everyone make them feel welcome. The cops were so embarrassed that they went bright red and left immediately. This got me thinking "why doesn't anybody do facial recognition to detect police officers?". Clearly this would be useful in other situations involving plainclothes officers, like finding out the names and ID numbers of the guys swinging the batons at unarmed protesters.

If you can spare an hour and 17 minutes, there's an absolutely fucking chilling documentary which came out recently on the G20 protests in Hamburg (https://www.youtube.com/watch?v=6sTJChDG9Rw, English subs). The German state seems to have a reputation for progressive values and tolerance, but this isn't entirely true. The excessive policing is so much more overt here than in the UK. German police have protested that their right to privacy is violated when they are forced to wear their ID numbers on their clothing. I seem to recall you talking about the Bavarian surveillance laws in one of your videos. Bavaria, where I live, is especially overpoliced. As a quick example: I've been told about a law here allowing cops to carry hand grenades. I have no idea if this passed, but it wouldn't surprise me.

Anyway, I spoke about this idea with my buddy Dave who's a corporate lawyer in London. Dave had asked himself a similar question: why isn't there a database of unmarked police cars in London? This data must be out there somewhere, but neither of us had any idea where it might be or how to collect it. We discussed contacting the police themselves, making freedom of information requests, or crawling the Met's twitter feed, but none of this seemed to be feasible.

About a week later, my tattoo artist Dom made a suggestion: why not create a mobile phone app which provides people with the services they need to interact with the police, and use it to gather the data ourselves? I like to think of this as inverting the business model used by Facebook. Instead of selling the data collected by users on themselves, why not provide a service to a user which incentives them to collect data on the police? I should point out that by 'mobile phone app', we are actually talking about something called a PWA, which is a mobile-optimised website that is almost indistinguishable from a traditional iOS/Android app while avoiding the Google/Apple app stores.

Such data could have wonderful applications. In addition to the countermeasures described above, we could create a time-space map of police activities, allowing the public to see exactly when and where the cops are stopping and searching on flimsy pretext. Users could actually see the people assigned to police them, instead of being harassed and assaulted by total strangers.

Of course, the serious application of such data is it's application to institutional racism. In Germany, the head of the police apparently made the following argument (paraphrased):
"It is against the law for the police to be racially biased. Therefore, the police don't do it, SO WE DON'T NEED TO COLLECT DATA ON IT."
Everybody knows that the German police do racial profiling. There is however no data to prove this. Collecting such data could create statistical proof that institutional racism exists, and identify the particular officers perpetuating this.

This is clearly not a problem confined to Germany. Any anti-police anti-racist project would be most effective if it could be shared and adapted internationally. Open-sourcing the code might enable this, especially if the software is designed with internationalization and simplicity as explicit goals. Since the British government has a pretty good website for learning about police powers (for example https://www.gov.uk/police-powers-to-stop-and-search-your-rights), I decided to build the first prototype for the UK. The list of target jurisdictions for this project is incomplete, but it will also include Bavaria/Germany (depending on how much complexity is added by catering to both federal and state law) and possibly the Netherlands.

Including sweet little Holland among these Orwellian nightmare-states may seem like an odd choice, but it offers interesting possibilities. For one thing, Malka is currently studying a Masters in Forensic Science at the University of Amsterdam. She has connections to academics doing research on police violence, which potentially means that this project could receive institutional support and funding. Additionally, Holland may offer a friendlier testing ground for the app, since the Dutch police are so notoriously chilled-out (at least, compared to other states).

As we all know, another notoriously racist institution is the one we're both part of, the tech industry. In an effort to avoid reproducing this, I'm trying to organise this project in an explicitly anti-racist way. This project encourages contribution from as many People of Colour and other marginalised groups as possible, to avoid yet another homogeneously white-cis-het-male development team. Since the prejudices and biases of software developers always leak into their work, an anti-racist approach has the added benefit of creating a product which works optimally for users who are most affected by police oppression.

Here is a summary of the project as it currently stands:
- owners are myself and Dave
- around 10 other non-committed participants (including developers, activists, and students)
- dummy version of app is live at https://mostlyharmful.org
- first attempt at actual prototype is ongoing

Here is a summary of the immediate plans:
- kickoff meeting for all participants this Saturday (discussing organisational & technical planning, and choosing roles)
- contact Rotehilfe, a German legal-aid nonprofit to discuss collaboration
- contact Stop-Watch, a British organisation researching accountable policing to discuss collaboration
- contact the Netherlands Forensic Institute to discuss collaboration and research

Thanks for the questions you posed about the project. You really boiled down the key considerations of the project into accuracy and safety; I've attempted to answer these questions in FAQ.md, attached to this email. I've also attached KICKOFF.md, which is a draft plan for the meeting on Saturday.

I really welcome any input whatsoever on this. This project is at stage of maturity where I've only just stopped asking myself "Am I full of shit? Why has nobody done this before?". I now think that while similar efforts exist (copwatch-type movements), I haven't found any similar such project which:
- has the same emphasis on comprehensive, public-access data collection.
- incentivises users to actually use the platform by providing them a useful service.
- takes the necessary anti-racist approach within the organisation.
That being said, there is a strong possibility that there are important issues I have overlooked, so please do let me know if anything comes to mind.

In terms of 'known unknowns', there are two questions which I'll briefly describe.

# How legal is this?

To be honest, I plan to go ahead with this as far as possible regardless of legality. By doing this as a website running on a server outside the legal jurisdiction of the user and avoiding the gatekeepers in the Apple/Google store, as well as open-sourcing the code, I think this project would still have a slim chance of success even if declared illegal. This may however negatively impact publicity and usability, as well as getting me fired or arrested which wouldn't be ideal. 

As far as I know, in the UK and Holland it is theoretically okay to record the police. Actually using a mobile phone app to get legal help during a police Kontrolle may be a different issue, but presumably this comes down the the attitudes of the officer and the user. In Germany it may well be illegal to actually record the police. However, the key data we need to create a comprehensive database is the police ID number. In most situations, a police officer is obliged to show ID proving that they actually are a police officer, which should make it possible to reliably collect (at minimum) the ID number.

# How do we sell this?

This project works best when it is free to the user, in order to make it accessible to economically disadvantaged people and build trust. The real question is the underlying narrative. Although the core user-base is composed of the marginalised groups most affected by police violence, this project could actually be viewed as apolitical - isn't it true that everyone in society deserves equally to know and exercise their rights in the face of police power? This project is most likely to succeed with wide, diverse support. Collecting data from the full spectrum of society is also beneficial for research. For that reason, I think it's important to create a compelling brand for this project, which engages users irrespective of their personal political leanings.

I've been considering one particular approach to this: given the post-truth nature of the political climate we all live in, why not sell this project from a pro-police perspective? From this angle, we would be collecting data with the goal of proving that our police are doing a wonderfully fair job and not at all racist. At the same time, this data would be presented to the public to build trust in law enforcement officers. This might be a compelling narrative to somebody who is politically centrist, while at the same time, somebody with progressive views might recognise this as something like satire.

I'm by no means set on this approach, as it may prove too silly to work in real life.


 
If you've made it this far, congratulations and thanks for reading! I'm sorry about the huge wall of text, but this is the first time I've actually written down a detailed overview of the project from all the important angles. I explained it from start-to-finish like this to give you both an idea of the progress that has been made so far, and to make sure I didn't leave anything out. I'm really excited to hear what you have to say.

I'll end this with kind-of a request. Basically, I'm good at writing mediocre code, getting mad about politics, and not much else. This is my first time ever playing the role of organiser, let alone trying to get startup/research-project/whatever-this-is off the ground by myself. While I would describe Dave as co-owner of this project, he's been busy with his own problems so it's just been me kinda winging-it. Can you offer me any advice based on your experience? Right now, I'm focused on:
* drafting out the overall design for a minimum viable prototype of the app from a technical perspective.
* finding interested people who have skills I lack, and getting them onboard.
This seems to work so far, but I going forward I need to either properly learn project management, or get somebody who knows what they are doing.