# Pitch

A brief background on myself:
I'm a 26-year-old British software developer. I work for a subcontractor of the DLR (the German space agency) here in Munich. I primarily develop full-stack web applications (Scala/Akka backend, Angular/TypeScript frontend). The software I develop is used for mission planning and telemetry analysis of satellite missions including the ISS. My wife Malka is German and lives/studies in Amsterdam. Since the Corona crisis, I've been working entirely remotely and splitting my time between both cities.

This all started in July 2020. I was watching my housemate's punk band play a show inside a 2-car garage, in a tiny Bavarian village. One of the guys in the band told me a heartwarming anecdote about a show he had been to: two plainclothes police officers came into this gig to shut it down, but somebody clocked them as cops. The DJ stopped the music, pointed out the officers to the audience, and asked that everyone make them feel welcome. The cops just left, embarrassed. This got me thinking "why doesn't anybody do facial recognition to detect police officers?". Clearly this would be useful in situations involving plainclothes officers other than concerts, such as finding out the names and ID numbers of the guys swinging the batons at unarmed protesters.

If you ever have an hour or so spare, there's an absolutely chilling documentary about the G20 protests in Hamburg (https://www.youtube.com/watch?v=6sTJChDG9Rw, English subs). The German state seems to have a reputation for progressive values and tolerance, but this isn't entirely true. Compared to the UK, German police are much more overtly pervasive and aggressive. German police have protested that their right to privacy is violated when they are forced to wear their ID numbers on their clothing. I seem to recall you talking about the Bavarian surveillance laws in one of your videos. Bavaria, where I live, is especially over-policed. As a quick example: I've been told about a law here allowing cops to carry hand grenades. I have no idea if this passed, but it wouldn't surprise me.

Anyway, I after the show ended (when the police arrived, of course) I called my buddy Dave to chat about this hypothetical facial-recognition software. Dave is a corporate lawyer in London, and it turned out he had asked himself a similar question: why isn't there a database of unmarked police cars in London? This data must be out there somewhere, but neither of us had any idea where it might be or how to collect it. We discussed contacting the police themselves, making freedom of information requests, or crawling the Met's twitter feed, but none of this seemed to be feasible.

About a week later, my tattoo artist Dom made a suggestion: why not create a mobile phone app which provides people with legal advice during a police Kontrolle, in order to gather the data ourselves? In fact, there are a whole range of services needed by people in this situation which could be incorporated into such an app (including audio/video/photo/location recording & streaming, and finding the local legal-aid contact number). I like to think of this as inverting the business model used by Facebook: instead of selling the data collected by users on themselves, why not provide a service which incentives them to collect data on the police? I should point out that by 'mobile phone app', we are actually talking about something called a PWA, which is a mobile-optimised website that is almost indistinguishable in function from a traditional iOS/Android app.

Such data would have diverse applications. In addition to the countermeasures described above, we could create a time-space map of police activities, allowing the public to see exactly when and where stop-and-search is occuring, and on what pretext. Users could actually identify the people assigned to police them, instead of being harassed and assaulted by total strangers.

The most important application of such data would be to prove the existence of institutional racism. I have been told that in Germany, the authorities do not collect ethnicity data from the victims of the police, precisely because racial profiling is illegal and therefore must not exist. Despite this circular logic, it seems common knowledge that the police here are racist, both as an institution and often as individuals. Collecting this data would also allow identification of individual officers who act on racial prejudice.

Having decided to start such a project, the question arose of where to launch. The problem of excessive and racialised policing is not confined to Germany. Any such project would be most effective if shared and adapted internationally. Open-sourcing the code may enable this, especially if the software is created with internationalization and simplicity as explicit design goals. Since the British government has a pretty good website for learning about police powers (for example https://www.gov.uk/police-powers-to-stop-and-search-your-rights), I decided to build the first prototype for the UK. The list of target jurisdictions for this project is incomplete, but it will also include Bavaria/Germany (depending on how much complexity is added by catering to both federal and state law) and possibly the Netherlands.

This last one may seem like an odd choice given it's liberal reputation, but it offers interesting possibilities. For one thing, Malka is currently studying a Masters in Forensic Science at the University of Amsterdam. Institutional support from a research project on police violence would add legitimacy and possibly funding. Additionally, the Netherlands may offer a friendlier testing ground for the app, since the Dutch police are so laid back (at least, compared to other states).

As we both know, another notoriously racist institution is the tech industry. In an effort to avoid perpetuating this, I'm trying to organise this project in an explicitly anti-racist way. This project encourages maximal contribution from People of Colour and other marginalised groups, to avoid yet another homogeneously white-cis-het-male development team. Since the prejudices and biases of software developers always leak into their work, an anti-racist approach has the added benefit of creating a product which works optimally for users most affected by police oppression.

Here is a summary of the project as it currently stands:
- owners are myself and Dave
- around 10 other non-committed participants (including developers, activists, and computer/forensic-science students)
- dummy version of app is live at https://mostlyharmful.org
- first attempt at actual prototype is ongoing

Here is a summary of the immediate plans:
- kickoff meeting for all participants this Saturday (discussing organisational & technical planning, and choosing roles)
- contact Rotehilfe, a German legal-aid nonprofit to discuss collaboration
- contact Stop-Watch, a British organisation researching accountable policing to discuss collaboration
- contact the Netherlands Forensic Institute to discuss collaboration and research

Thanks for the questions you posed about the project! I've attempted to answer them in FAQ.md, attached to this email. I've also attached KICKOFF.md, which is a draft plan for the meeting on Saturday.

I really welcome any input whatsoever on this. This project is at stage of maturity where I've only just stopped asking myself "Am I full of shit? Why has nobody done this before?". I now think that while similar efforts exist (like the cop-watch movement), I haven't found any similar project which:
- has the same emphasis on comprehensive, public-access data collection.
- incentivises users to actually use the platform by providing them a useful service.
- takes the necessary anti-racist approach within the organisation.
That being said, there is a strong possibility that there are important issues I have overlooked, so please do let me know if anything comes to mind.

In terms of 'known unknowns', there are two questions which I'll briefly describe.

## How legal is this?

To be honest, I plan to go ahead with this regardless. By doing this as a website running on a server outside the legal jurisdiction of the user and avoiding the gatekeepers in the Apple/Google app store, as well as open-sourcing the code, I think this project would still have a slim chance of success even if declared illegal. This may however negatively impact publicity and usability, as well as getting me fired or arrested which wouldn't be ideal.

As far as I know, in the UK and Holland it is theoretically okay to record the police. Actually using a mobile phone app to get legal help during a police Kontrolle may be a different issue, but presumably this comes down the the attitudes of the officer and the user. In Germany it may well be illegal to actually record the police. However, the key data we need to create a comprehensive and useful database is the police ID number. In most situations, a police officer is obliged to show ID to prove that they actually are a police officer, which should make it possible to reliably collect (at minimum) the ID number.

## How do we sell this?

This project works best when it is free to the user, in order to make it accessible to economically disadvantaged people most oppressed by the police. The real question is the underlying narrative. Although the core user-base is composed of the marginalised groups most affected by police violence, this project could actually be viewed as apolitical - isn't it true that everyone in society deserves equally to know and exercise their right to freedom from excessive and unjust policing? This project is most likely to succeed with wide, diverse support. Collecting data from the full spectrum of society would also improve the statistics behind any research. For that reason, I think it's important to create a compelling brand for this project, which engages users irrespective of their personal political leanings.

I've been considering one particular approach to this: given the post-truth nature of the political climate we all live in, why not sell this project from a pro-police perspective? From this angle, we would be collecting data with the goal of proving that our police are doing a fair and just job, and not at all racist. At the same time, this data would be presented to the public to build trust in law enforcement, encouraging the public to comply safely and respectfully with the police. This might be a compelling narrative to somebody who is politically centrist. At the same time, somebody with progressive views might see this narrative as something akin to satire.

This could be a fantastic approach for building cross-spectrum solidarity, or it could be just too silly to work in real life.



If you've made it this far, congratulations and thanks for reading! I'm sorry about the huge wall of text, but this is the first time I've actually written down a detailed overview of the project from all the important angles. I explained it from start-to-finish like this to give you both an idea of the progress that has been made so far, and to make sure I didn't leave anything out. I'm really excited to hear what you have to say.

I'll end this with kind-of a request for advice. Basically: I'm good at writing mediocre code, getting mad about politics, and not much else. This is my first time ever playing the role of organiser, let alone trying to get this startup/research-project/whatever the ground by myself. While I would describe Dave as co-owner of this project, right now he's mad busy with his own problems so it's mainly been me, kinda winging-it. What can you tell me based on your experience? Right now, I'm focused on:
* drafting out the overall design for a minimum viable prototype of the app.
* finding interested people who have skills I lack, and getting them on-board.
This seems to work so far, but going forward I'm going to need to find a more structured approach (or find somebody who knows what they are doing). Can you recommend any resources for learning to organise effectively, particularly from an anti-hierarchial and inclusive perspective? It would also be nice to learn how to do this with optimal organisational security.
I'm fully expecting that the police will start breathing down our necks because of this, that is, if everything goes well.



# Follow-up

## Accuracy and safety

Here is an idea which may improve accuracy and safety:
move as much of the UX as possible over to voice control.

Once the app is launched and streaming audio to the server, it would begin listening
for key phrases such as:
- "good afternoon officer" (indicating the start of a police Kontrolle)
- "stop and search" (indicating the nature of the Kontrolle)
- "badge number" (indicating that what follows will be a readout of an officers ID)
- "call a lawyer" (indicating that the user wants to get actual legal help ASAP)

Upon detection of such phrases, the app could take action; if the app is configured
to run in safety-maximising 'silent' mode, this could be sending the user a push notification
containing relevant legal advice.

Technically speaking, the easy part of this involves recognising the user's own voice.
This is comparatively straightforward because we could encourage the user to do
initial setup of the app which would 'train' it to recognise the user's voice.

The harder part of this will be parsing the unfamiliar voices of the officers involved.
This may involve heavier server-side processing. For detecting and parsing such input,
we may need to fall back to manual input until we have gathered sufficient data
to model user/cop interaction so that it can be analysed. I'm not certain,
but this could a situation where ML could be usefully applied.

From a quick bit of research, I can see that this should be technically feasible using
a mobile webapp. It might be much easier for a traditional native mobile app, especially android,
since we could use public toolkits such as the Google Cloud Text-to-Speech API.
This would be less than ideal, although we could still avoid the Google Play store
by releasing such an application on F-Droid. I'm not sure what the iOS alternative is.

In terms of accuracy, this would allow us to work with raw audio data (plus potentially
photo/video/location), which would hopefully be more reliable than user input.

In terms of safety, this would make use of this app absolutely discreet and therefore
minimse the possibility of a user getting shot for disrespecting a cop by playing on their phone.

## Monetisation

To put this on sound financial footing, there are a number of approaches:
- non-tracking advertising within app (may not work well with voice control)
- charging for access to public database via rate limiting
  (that is, free for the individual user to view their data,
  but charge for access to the full (anonymised) database
- donation-based pay-what-you-want use

There is also the possibility of collaboration with organisations such as Rotehilfe, Stop-watch,
and the NFI which may provide funding.

## Branding

I know that the pro-police idea was a bit far out. I'll leave weird narratives to the sci-fi authors.
I think a more sensible initial approach will be to go for minimal branding and an apolitical narrative,
posing as neither pro- nor anti-police. This would also work with a super-minimalist, voice-controlled UX.