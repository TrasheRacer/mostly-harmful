# Project FAQ

## Will it be accurate?
From a technical standpoint, we would aim to have uploaded data geo-tagged.  
This involves using the user's phone locatation, which is usually accurate to meters.  
Combined with the high-quality audio, photo and video captured by modern smartphones,  
we would hope that gathered data would be suitably high-definition.  

### Identifying the police
In terms of identifying data collected on the police, we aim to make officials  
as identifiable as possible.
Such data will be publicly accessible.    
We assume that in most situations (excluding riot police, ...) an officer of the law  
has to identify themselves as such.  
Therefore, we hope to record at least:  
- ID number  
- name
- rank
- station/precinct  
  
Photo/video recording will be offered, although this will be subject to differing  
legislation in different legal jurisdictions.  
This may be possible in the UK and the Netherlands, though not neccessarily Bavaria.  

We hope that streamed audio/location-recording (with explicit user consent) would be  
a valuable source of data for analysis.  

### User demographics
Optional, opt-in demographics information will be collected from the user:  
- ethnicity
- gender
- age
- ...

It is hoped that this data will be useful in proving the existence of institutional bias.

### Bad actors
From an opeartional standpoint, data validation is a complicated picture.  
Potential bad actors among our users include:  
- trolls
- bots
- police 

Bad actors can upload data which is invalid (false or misleading).  
This data may not be easily distinguishable from valid data.  
Given that we intend to make this data suitable for serious research,  
it is imperative that we have procedures to validate submitted data.  
From the initial release through to beta testing, we can reduce the impact of this  
by limiting the size and propagation of the user base (invitation-only access, ...).

Unfortunatly, verification of our user base for the purposes of validating data  
comes at a cost. As verification usually involves some form of user identification,  
such as a confirmation email or SMS to a mobile number,  
we need to treat verified user data as nuclear waste (see below).  
This means minimising it's collection and disposing of it properly ASAP.

Minimising data collection also has advantages:
- streamlining potential regulatory compliance (GDPR, ...).
- encouraging trust from users, who may be suspicious of surveilance

#### An initial solution
A sensible option would be first releasing the app with minimal verification  
for a limited number of users, and adding verification if/when it becomes neccessary.
User verification should not be mandatory but encouraged, which may be a means of flagging
invalid data.

### Official validation
The gold standard in validating our data would involve cooperation with official bodies.  
Comparison between our public data and data collected by the police themselves  
would help us reliably detect invalid data.  
Since this project involves identification of actual police officers,  
so this may be a hard sell to the police themselves.  

That being said, right now there is considerable pressure on police to make  
structural changes and become accountable.  
This project could go some ways towards doing that.



## Will it get people hurt?
The following scenarios have been considered, although of course this is not a complete list.

### Public data used in malice by police/right-wingers/other-actors 
Police and extremists are considered together because:
- in countries like Germany, there is considerable crossover between these groups.  
- both groups pose the threat of violence towards users of the app.   

We can assume that the police themselves already gather some data on their own activities.  
Therefore, it is likely that whatever public data we present may already be known to them,  
making it of limited use to them.

We can also assume that the potential harm posed by the public data is minimised  
when this data is completely anonymous, meaning:  
- avoiding at-all-costs unneccessary data collection, by which the user may be identifiable.
- avoiding so-far-as-possible verification (requiring email/telephone for confirmation),  
  and purging this data when it is no longer neccessary.
- allowing the user to find their public data without being identifiable,  
  such as using an arbitrary psuedo-random nickname instead of an email address..

Lastly we assume that any non-public data we collect will eventually be subject to breach,  
followed by public scrutiny, fraud and identity theft.
Maximising user anonymitiy also minimises this risk.

### Flawed app content leading to user injury or death
Clearly, provinding faulty information to the user during a police Kontrolle could be fatal.  
As police are usually armed, the use case for the app involves a life-threatening sitation.   
We aim to minimise this risk by ensuring the legal information encoded in the app is of  
the highest accuracy, 

In Bavaria, we hope Rotehilfe (legal aid organisation) come onboard with their expertise.  
The UK version currently uses the GOV.uk website as a source of information   
(for example https://www.gov.uk/police-powers-to-stop-and-search-your-rights).  
This is just for the prototype stage will be done properly before going live.  
A Dutch version is also being considered, which may involve working with  
the University of Amsterdam and/or the Netherlands Forensic Institute.

### Flawed app UX leading to user injury or death
Encounters with the police are more dangerous for marginalised groups such as:
* People of Colour
* Sex workers
* Refugees
* Migrants
* Disabled people
* People with mental ilnesses
* Queer people
* Trans people
* ...

We can assume that a UX designer who is a straight white cis man is going to do a poor job  
tailoring an app to these groups, because they are basing their design on different  
lived experiences. This is obviously a huge problem.  

We aim to minimise the risk of a harmful UX by setting two key goals as an organisation:    
- to be anti-racist
- to be as inclusive as possible