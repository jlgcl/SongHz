--
-- PostgreSQL database dump
--

-- Dumped from database version 12.4 (Ubuntu 12.4-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.4 (Ubuntu 12.4-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.artists (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    origin character varying(255) NOT NULL,
    genres text[],
    years_active character varying(255) NOT NULL,
    associated_acts character varying(255) NOT NULL,
    members text
);


--
-- Name: artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.artists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.artists_id_seq OWNED BY public.artists.id;


--
-- Name: bio; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.bio (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    bio text[]
);


--
-- Name: bio_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.bio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bio_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.bio_id_seq OWNED BY public.bio.id;


--
-- Name: discography; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.discography (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    released character varying(255) NOT NULL,
    label character varying(255),
    sales integer,
    artist character varying
);


--
-- Name: discography_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.discography_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: discography_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.discography_id_seq OWNED BY public.discography.id;


--
-- Name: songs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.songs (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    artist character varying(255) NOT NULL,
    description text NOT NULL,
    labels text[]
);


--
-- Name: songs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.songs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: songs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.songs_id_seq OWNED BY public.songs.id;


--
-- Name: songwriter; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.songwriter (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    years_active character varying(255),
    company character varying(255),
    associated_acts text
);


--
-- Name: songwriter_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.songwriter_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: songwriter_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.songwriter_id_seq OWNED BY public.songwriter.id;


--
-- Name: artists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists ALTER COLUMN id SET DEFAULT nextval('public.artists_id_seq'::regclass);


--
-- Name: bio id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bio ALTER COLUMN id SET DEFAULT nextval('public.bio_id_seq'::regclass);


--
-- Name: discography id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discography ALTER COLUMN id SET DEFAULT nextval('public.discography_id_seq'::regclass);


--
-- Name: songs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs ALTER COLUMN id SET DEFAULT nextval('public.songs_id_seq'::regclass);


--
-- Name: songwriter id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songwriter ALTER COLUMN id SET DEFAULT nextval('public.songwriter_id_seq'::regclass);


--
-- Data for Name: artists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.artists (id, name, origin, genres, years_active, associated_acts, members) FROM stdin;
1	BTS	South Korea	{Kpop}	2013-present	Big Hit	RM, Jin, Suga, Jimin, V, Jungkook, J-Hope
3	Ariana Grande	Boca Raton, Florida, US	{"Pop, R&B"}	2008-present	Big Sean, Justin Bieber, Social House, etc.	
4	Coldplay	London, England	{"Alternative rock","pop rock",post-Britpop,pop}	1996-present	Apparatjik, Brian Eno, Jon Hopkins, Davide Rossi	Chris Martin, Jonny Buckland, Guy Berryman, Will Champion, Phil Harvey
\.


--
-- Data for Name: bio; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.bio (id, name, bio) FROM stdin;
10	Stargate	{"Stargate is a record producing and songwriting team composed of Tor Erik Hermansen (born 14 October 1972) and Mikkel Storleer Eriksen (born 10 December 1972), based in Los Angeles. The team's genres include R&B, pop and hip hop. Stargate was established in Trondheim, Norway.\n\nThey have produced or written for Michael Jackson, Mariah Carey, Lionel Richie, Wiz Khalifa, Britney Spears, Beyoncé, Rihanna, Selena Gomez, Rita Ora, Normani, Mis-Teeq, Celine Dion, Blue, Janet Jackson, Shakira, Jennifer Lopez, Sam Smith, Mary J. Blige, Ne-Yo, Katy Perry, Coldplay, Pink, Sia, Whitney Houston, Nas, Chris Brown, Khalid, Charli XCX, Trey Songz and others."}
11	Markus Dravs	{"Markus Dravs is a music producer, songwriter, programmer, engineer and mixer. His credits includes Arcade Fire, Coldplay, Björk, Brian Eno, Mumford & Sons, Florence + the Machine, The Maccabees and Kings of Leon.He has won three Grammy Awards, four Billboard Music Awards and three Brit Awards for his production work. At the 53rd Grammy Awards he won Album of the Year for Arcade Fire's The Suburbs. At the 55th Grammy Awards, he won the Album of the Year for Mumford & Sons Babel. In 2009 at the 51st Grammy Awards, Dravs won Best Rock Album for Coldplay's Viva la Vida or Death and All His Friends.Dravs won Producer of the Year at the 2011 Brit Awards. He was also nominated for Producer of the Year, Non-Classical at the 55th annual session of the Grammy Awards in 2013."}
1	BTS	{"Record-breaking South Korean boy band BTS (aka Bangtan Boys) balance an energetic blend of dance-pop and hip-hop with deeply introspective lyrics, which helped them build a devoted global following while also becoming the most successful K-pop act in U.S. chart history. Debuting in the early 2010s with their Skool trilogy, they steadily expanded their audience until breaking into the mainstream consciousness with the Love Yourself series. In 2018, their third official full-length, the platinum-certified Love Yourself: Tear, topped the Billboard 200, becoming the first K-pop to hit number one in the U.S. and the highest-charting album by an Asian act to date. They subsequently crowned the Billboard 200 again with the compilation Love Yourself: Answer (also 2018) and the 2020 release Map of the Soul: 7, which topped the charts in over 20 countries. Hitting another milestone that summer, BTS became the first all-South Korean act to top the Billboard Hot 100 with their single 'Dynamite'.  While imparting a positive influence through activities such as the LOVE MYSELF campaign and the UN ‘Speak Yourself’ speech, BTS has mobilized millions of fans across the world (named ARMY), topped prominent music charts, sold out worldwide tours including stadiums and has been named as one of TIME 100: The Most Influential People of 2019. The band has also been recognized with numerous prestigious awards like the Billboard Music Awards and American Music Awards. "}
12	Dave Stewart	{"David Stewart is an English singer, songwriter, musician and producer from London, United Kingdom. At the age of 18, Stewart was touring the UK with famous British rapper Example and even played to an audience of 80,000 people at V Festival.\n\nStewart would then go on to produce his own mixtape ‘Late Night Viewing’ and following its huge success, a four-track EP called ‘Dark Side of Paradise’.\n\nStewart himself is from a very artistic family; his father is a comedian and his mother was a dancer, with his sister Kate being a fellow musician who is currently signed to Warner Music. Aside from Dynamite by BTS, David Stewart has worked on songs for the Jonas Brothers and Hailee Steinfeld. It’s difficult to track exactly how many songs Stewart has helped produce, but most recently he worked again with Jessica Agombar on the Jonas Brothers’ hit single, ‘What a Man Gotta Do.’\n\nStewart also produced ‘I Love You’s’ by Hailee Steinfeld."}
2	Ariana Grande	{"Ariana Grande is perhaps the quintessential pop star of the last half of the 2010s, capturing the era's spirit and style. Emerging in 2013 with the hit single \\"The Way,\\" Grande initially appeared to be the heir to the throne of Mariah Carey, due in part to her powerhouse vocals. With its Babyface production, her debut Yours Truly underscored her debt to '90s R&B, but Grande quickly incorporated hip-hop and EDM into her music. \\"Problem,\\" a 2014 smash duet with Iggy Azalea, was the first indication of her development, an evolution underscored by the hits \\"Bang Bang\\" and \\"Love Me Harder,\\" which featured Jessie J & Nicki Minaj and the Weeknd, respectively. Grande maintained her popularity with 2016's Dangerous Woman, then really hit her stride with 2018's Sweetener and its swift sequel Thank U, Next, whose title track became her first number one pop hit. That achievement was quickly equaled by \\"7 Rings,\\" a glitzy anthem for the Instagram age that consolidated her stardom and artistry."}
4	Pdogg	{"Kang Hyo-won (강효원), also known as Pdogg, is a South Korean songwriter and record producer. He is part of the producers of Big Hit Entertainment and the main producer of BTS."}
5	Hitman Bang	{"Bang Shi-hyuk is a South Korean composer, songwriter, record producer, and also the CEO and founder of Big Hit Entertainment. Bang Shi-hyuk’s popularity is parallel with the successful boy-group from his agency, BTS. Both Bang Shi-hyuk and BTS are internationally popular among A.R.M.Y (BTS fans). However, before BTS successful in the industry, Bang Shi-hyuk had already collaborated with many famous Korean singers and even formed the duo “Hitman” with JYP Entertainment’s CEO and founder, Park Jin-young. "}
3	Coldplay	{"Surfacing in 2000 with the breakthrough single \\"Yellow,\\" British group Coldplay quickly became one of the biggest acts of the early 21st century, honing a blend of introspective Brit-pop and anthemic rock that helped push the band to the top of album charts worldwide. Coldplay's emergence couldn't have been more perfectly timed: with Radiohead embracing cerebral electronic soundscapes and Oasis further exploring psychedelic experimentation, audiences were hungry for a fresh-faced rock group with big aspirations and an even bigger sound. After the band's first three LPs went multi-platinum in several countries, Coldplay continued to mature, topping their early success with higher record sales, an ever-evolving sound that absorbed multiple genres, and record-breaking global stadium tours."}
7	Tommy Brown	{"Thomas Lee \\"TBHits\\" Brown (born May 1, 1986), also known as TBHits, is an American record producer, songwriter and rapper. Brown currently lives in LA and was born and raised in Pittsburgh, Pennsylvania. He has received awards from ASCAP, and was Grammy nominated. He has scored multiple chart topping albums while working with Ariana Grande on all six of her studio albums. Brown has also collected production credits for three songs on Grammy-award-winning artist Meghan Trainor's second album, Thank You.\n\nBrown learned from production greats Roy \\"Royalty\\" Hamilton and Rodney Jerkins, while working alongside them and eventually creating a team of his own."}
8	Max Martin	{"known professionally as Max Martin, is a Swedish singer, songwriter, and record producer. He rose to prominence in the late 1990s after making a string of hit singles such as Britney Spears' \\"...Baby One More Time\\" (1998), the Backstreet Boys' \\"I Want It That Way\\" (1999), and NSYNC's \\"It's Gonna Be Me\\" (2000).\n\nMartin has written or co-written 23 Billboard Hot 100 number-one songs, most of which he has also produced or co-produced, including Katy Perry's \\"I Kissed a Girl\\" (2008), Maroon 5's \\"One More Night\\" (2012), Taylor Swift's \\"Shake It Off\\" and \\"Blank Space\\" (2014), and The Weeknd's \\"Blinding Lights\\" (2019). Martin is the songwriter with the third-most number-one singles on the chart, behind only Paul McCartney (32) and John Lennon (26).[4] In addition, he is tied for the most Hot 100 number-one singles as a producer, 23, along with George Martin, who had achieved 23 by the time of his death. In early 2013, his single sales were tallied by The Hollywood Reporter to be at over 135 million. Martin has won the ASCAP Songwriter of the Year award a record eleven times."}
9	Rik Simpson	{"Rik Simpson (a.k.a. Rikademus) is a multi Grammy Award-winning British record producer, sound engineer, musician, and songwriter.  He is most recently recognised for his production work with Coldplay on Viva la Vida or Death and All His Friends (2008), Mylo Xyloto (2011), Ghost Stories (2014), A Head Full of Dreams (2015), Kaleidoscope EP (2017) and Everyday Life (2019). He has also gained critical acclaim for his work with Jay-Z, Portishead, Kasabian, Black Rebel Motorcycle Club and PJ Harvey. In addition to the technical sides of recording and mixing, he often contributes musically, playing and singing on many of his productions.\n\nSimpson is also one half of production duo The Darktones, with Coldplay bassist Guy Berryman."}
6	Social House	{"Pennsylvania natives Michael \\"Mikey\\" Foster and Charles \\"Scootie\\" Anderson teamed up to form the duo Social House, delivering feel-good rhythmic pop for other artists before making their official debut with the 2018 single \\"Magic in the Hamptons.\\" The pair met in Pittsburgh and moved to Los Angeles, signing a joint venture with Scooter Braun's SB Projects and Interscope Records. Along with frequent collaborator Tommy Brown, Social House co-wrote tracks for Ariana Grande, Meghan Trainor, and DJ Khaled. In 2018, the trio also contributed to Jennifer Lopez's \\"Dinero\\" with Khaled and Cardi B. Later that summer, Social House made their official debut with the single \\"Magic in the Hamptons,\\" which featured guest Lil Yachty. In August 2019, the duo issued their debut EP, Everything Changed..., which included the single \\"Boyfriend\\" featuring Ariana Grande. That track went on to receive a Grammy nomination for Pop Duo/Group Performance."}
\.


--
-- Data for Name: discography; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.discography (id, title, released, label, sales, artist) FROM stdin;
1	Map of the Soul: 7 - The Journey	July 15, 2020	Def Jam, Virgin	622153	BTS
2	Face Yourself	April 4, 2018	Def Jam, Virgin	338324	BTS
3	Youth	September 7, 2016	Pony Canyon	94293	BTS
4	Wings	October 10, 2016	Big Hit, Loen	1300000	BTS
5	The Most Beautiful Moment in Life: Young Forever	May 2, 2016	Big Hit, Loen, Pony Canyon	1000000	BTS
6	Thank U, Next	February 8, 2019	Republic	425000	Ariana Grande
7	Sweetener	August 17, 2018	Republic	249000	Ariana Grande
8	Dangerous Woman	May 20, 2016	Republic	570000	Ariana Grande
9	My Everything	August 25, 2014	Republic	135000	Ariana Grande
10	Yours Truly	August 30, 2013	Republic	750000	Ariana Grande
11	Everyday Life	November 22, 2019	Parlophone	125000	Coldplay
12	A Head Full of Dreams	December 4, 2015	Parlophone	6000000	Coldplay
13	Ghost Stories	May 19, 2014	Parlophone	3700000	Coldplay
14	Mylo Xyloto	October 24, 2011	Parlophone	8000000	Coldplay
15	Viva la Vida or Death and All His Friends	June 12, 2008	Parlophone	10000000	Coldplay
16	X&Y	June 6, 2005	Parlophone	13000000	Coldplay
17	A Rush of Blood to the Head	August 24, 2002	Parlophone	15000000	Coldplay
18	Parachutes	July 10, 2000	Parlophone	13000000	Coldplay
\.


--
-- Data for Name: songs; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.songs (id, title, artist, description, labels) FROM stdin;
2	Face Yourself	BTS	Face Yourself is the third Japanese studio album (fifth overall) by South Korean boy band BTS. It was released on April 4, 2018. It contains Japanese versions of songs previously released on their 2016 Wings album and 2017 Love Yourself: Her EP, as well as three brand new, original Japanese-language tracks: "Don't Leave Me", "Let Go", and "Crystal Snow". Its debut at number 43 on the Billboard 200 made it the third-highest-charting Japanese album in the history of the chart.	{Night-time,Personal,Driving,Friends,Relaxing}
5	The Most Beautiful Moment in Life: Young Forever	BTS	The Most Beautiful Moment in Life: Young Forever (Korean: 화양연화 Young Forever; Hanja: 花樣年華 Young Forever; RR: Hwayangyeonhwa Young Forever) is the first Korean-language compilation album by South Korean boy band BTS. The album was released on May 2, 2016, in two physical configurations, a day version and a night version. The album contains twenty-three tracks, including three new singles ("Epilogue: Young Forever", "Fire" and "Save Me"), and most tracks from The Most Beautiful Moment in Life, Pt. 1 and The Most Beautiful Moment in Life, Pt. 2, as well as several remixes.	{Youthful,Melancholy,Workout,Dance,Walking,Friends}
7	Sweetener	Ariana Grande	Sweetener is the fourth studio album by American singer Ariana Grande. It was released on August 17, 2018, through Republic Records. The album is a pop, trap and R&B album, with production from Charles Anderson, Hit-Boy, Ilya Salmanzadeh, Max Martin and Pharrell Williams. Sweetener also contains guest vocals by Williams, Nicki Minaj and Missy Elliott.\n\nSweetener debuted at number-one on the US Billboard 200 with 231,000 album-equivalent units moved in its first week, of which 127,000 were from pure sales, marking Grande's third release to reach the top position in the country. The album received critical acclaim upon release, appearing on several year-end and decade-end lists. Sweetener is certified platinum by the Recording Industry Association of America (RIAA) for earning over one million units in the country. The album also topped the charts in several other countries, including in Australia, Canada, Ireland, New Zealand and the United Kingdom. It won Best Pop Vocal Album at the 61st Annual Grammy Awards, marking the first Grammy win of Grande's career. As of June 2020, the album has sold 321,000 pure copies in the US.\n\nThree singles were released from Sweetener, all of which reached the top-twenty on the US Billboard Hot 100: The lead single, "No Tears Left to Cry", debuted and peaked at number three, while the promotional single, "The Light Is Coming" featuring Minaj, peaked at number 89 on the chart. The second and third singles, "God Is a Woman" and "Breathin", reached numbers 8 and 12, respectively. Grande launched on a series of concerts entitled The Sweetener Sessions (2018) to promote the album. To further support Sweetener and her fifth studio album, Thank U, Next (2019), Grande embarked on the Sweetener World Tour, which began on March 18, 2019 and concluded on December 22, 2019.	{Cheerful,Personal,Driving,Motivating}
11	Everyday Life	Coldplay	Everyday Life is the eighth studio album by British rock band Coldplay. It was released on 22 November 2019 by Parlophone in the United Kingdom and Atlantic Records in the United States. It is a double album (released as a single CD), with the first half titled Sunrise and the other Sunset similar to X&Y (2005). The release coincided with Coldplay: Everyday Life - Live in Jordan, in which performances of each half of the album were live streamed from Amman, Jordan, at sunrise and sunset, respectively.	{Inspiring,Melancholy,Cheerful,Driving,Walking,Cheerful,Family,Friends}
12	A Head Full of Dreams	Coldplay	A Head Full of Dreams is the seventh studio album by the British rock band Coldplay. It was released on 4 December 2015, by Parlophone in the United Kingdom, and by Atlantic Records in the United States. Coldplay recorded the album from early to mid 2015, right after the completion of their previous album Ghost Stories, with a markedly different style and sound from its predecessors. For various songs, Coldplay collaborated with Beyoncé, Noel Gallagher, Tove Lo, Khatia Buniatishvili and Merry Clayton. The album was produced by Rik Simpson and Stargate. The album also features a sample of President Barack Obama singing "Amazing Grace" at Clementa C. Pinckney's funeral on the song "Kaleidoscope".	{Inspiring,Cheerful,Driving,Traveling}
10	Yours Truly	Ariana Grande	Yours Truly is the debut studio album by American singer Ariana Grande. It was released on August 30, 2013, by Republic Records. Incorporating both pop and R&B, Yours Truly was influenced by the music of Whitney Houston, Amy Winehouse, Christina Aguilera and Mariah Carey, amongst Grande's other idols. Grande describes the album's first half as a "throwback" to the R&B music of the 1990s, and the second half being "very unique and very special that I've sort of written". Grande herself co-wrote six out of the twelve album tracks. Harmony Samuels, Kenneth "Babyface" Edmonds, Patrick "J. Que" Smith and Grande's Victorious co-star Leon Thomas III, as well as others, handled the album's music production.\n\nGrande recorded the songs on the album over a three-year period. Featured collaborators include Big Sean, Mika and Mac Miller, in addition to The Wanted's Nathan Sykes, who features on the song "Almost Is Never Enough", which was also included on The Mortal Instruments: City of Bones soundtrack (2013). Occasionally, the album dips into other genres such as adult contemporary music and dance music. Yours Truly debuted atop the US Billboard 200 albums chart, selling 138,000 copies in its opening week; it was eventually certified Platinum by the Recording Industry Association of America (RIAA) and has sold 615,000 copies in the United States as of June 2020. Internationally, Yours Truly reached top-ten positions in the album charts of Australia, Canada, Denmark, Ireland, Japan, the Netherlands and the United Kingdom.	{Youthful,Traveling,Driving,Friends,Relaxing}
13	Ghost Stories	Coldplay	Ghost Stories is the sixth studio album by British rock band Coldplay. Co-produced by the band with Paul Epworth along with returning Mylo Xyloto producers Daniel Green and Rik Simpson, it was released by Parlophone on 16 May 2014. The album was released by Atlantic Records in North America on 19 May 2014. It is the first album by the band in North America under Atlantic, after Coldplay were transferred from Capitol Records in 2013, following the purchase of EMI and its assets by the Universal Music Group in 2012, which required the sale of Parlophone to Warner Music Group.\n\nThe album was recorded by the band throughout 2013 and 2014 at the band's purpose-built home studios in London, England, and in Los Angeles. It features guest producers Avicii, Timbaland and Madeon, and the band's frequent collaborator Jon Hopkins. It was heavily promoted by the band and Parlophone in the lead-up to its release, with an accompanying prime time TV special, a visual album, and a special six-date promotional tour of the album, as well as various appearances on television and radio. The album was further promoted by five singles: "Magic", the lead single, released in March; "Midnight", released in April; "A Sky Full of Stars", released in May; "True Love", released in August; and "Ink", released in October. It was nominated for Best Pop Vocal Album at the 57th Grammy Awards. At the 2015 Billboard Music Awards it was named Top Rock Album.\n\nThe album received mixed to positive reviews, with many critics praising the band's return to the more somber, melancholy style found in their earlier music, though some found the album repetitive and lacking direction. It is reported by several media outlets that Chris Martin has said that the album was inspired by his and Gwyneth Paltrow's split in 2014.	{Lost,Personal,Driving,Melancholy,Walking}
3	Youth	BTS	Youth is the second Japanese studio album and third studio album overall by South Korean boy band BTS, which was released on September 7, 2016. The album features 13 tracks.	{Running,Melancholy,Cheerful,Traveling,Youthful}
1	Map of the Soul: 7 - The Journey	BTS	Map of the Soul: 7 – The Journey (stylized as Map of the Soul: 7 ~ The Journey ~) is the fourth Japanese studio album, and eighth overall, by South Korean boy band BTS, released on July 14, 2020. It is the band's first full length Japanese offering in two years since 2018's Face Yourself. The album contains Japanese versions of songs from their Love Yourself: Answer (2018), Map of the Soul: Persona (2019) and Map of the Soul: 7 (2020) albums, as well as four new, original Japanese tracks: "Intro: Calling", lead single "Stay Gold", "Your Eyes Tell", and "Outro: The Journey". Previously released 2019 single "Lights" was also included.	{Inspiring,Motivating,Night-time,Melancholy,Cheerful,Family,Friends}
4	Wings	BTS	Wings is the second Korean studio album (fourth overall) by South Korean boy band BTS. The album was released on October 10, 2016, by Big Hit Entertainment. It is available in four versions and contains fifteen tracks, with "Blood Sweat & Tears" serving as its lead single.  Heavily influenced by Hermann Hesse's coming of age novel, Demian, the concept album thematically deals with temptation and growth. It was later reissued as a repackage album, titled You Never Walk Alone, on February 13, 2017,a continuation of the canon for Wings. Three new songs were added to the track listing, with "Spring Day" and "Not Today" promoted as the lead singles. Both albums received positive reviews from critics. They sold a combined 1.8 million physical copies worldwide, the group's highest record sales at the time. This earned BTS the title of "million sellers" due to the outstanding financial reception. According to Gaon Chart, Wings was the best-selling album of 2016 in Korea.	{Inspiring,Personal,Melancholy,Driving,Motivating,Stressed,Lost,Workout}
16	X&Y	Coldplay	X&Y is the third studio album by the British rock band Coldplay. It was released on 6 June 2005 by Parlophone in the United Kingdom, and a day later by Capitol Records in the United States. The album was produced by Coldplay and producer Danton Supple. It is noted for its troubled and urgent development, with producer Ken Nelson having originally been tasked with producing much of the album; however, many songs written during his sessions were discarded owing to the band's dissatisfaction with them. The album's cover art is a combination of colours and blocks, which is a representation of the Baudot code.	{Relaxing,Melancholy,Lost,Stressed,Driving,Personal,Family,Walking}
18	Parachutes	Coldplay	Parachutes is the debut studio album by the British rock band Coldplay. It was released on 10 July 2000 by Parlophone in the United Kingdom. The album was produced by the band and British record producer Ken Nelson, except for one track, "High Speed", which was produced by Chris Allison. Parachutes has spawned the singles "Shiver", "Yellow", "Trouble", and "Don't Panic".\n\nThe album was a commercial success, and was met with positive reviews. Upon release, the album quickly reached number one in the United Kingdom, and has since been certified 9× Platinum. In the United States, the album peaked at number 51 on the Billboard 200, and has since been certified Double Platinum. It won the Grammy Award for Best Alternative Music Album in 2002, and has earned the band various accolades since its release. Parachutes is also the 22nd best-selling album of the 21st century in the United Kingdom, and won the Best British Album award at the 2001 Brit Awards. As of 2011, it has sold around 8.5 million copies worldwide.	{Running,Cheerful,Motivating,Traveling}
6	Thank U, Next	Ariana Grande	Thank U, Next (stylized in all lowercase) is the fifth studio album by American singer Ariana Grande, released on February 8, 2019, by Republic Records. It was released six months after her fourth studio album Sweetener (2018), created in the midst of Grande's personal struggles, including the death of ex-boyfriend Mac Miller and her separation from then-fiancé Pete Davidson. Grande began working on the album in October 2018, enlisting writers and producers such as Tommy Brown, Max Martin, Ilya Salmanzadeh and Andrew "Pop" Wansel. Musically, Thank U, Next is primarily a pop record with trap and R&B elements. Thank U, Next was preceded by two singles, the title track and "7 Rings", with both debuting atop the Billboard Hot 100 chart, becoming Grande's first and second number one singles in the United States, respectively. "Break Up with Your Girlfriend, I'm Bored" became the third single on the day of the album release, peaking at number two on the Hot 100. The album peaked at the top spot in many countries, including Australia, Canada, Ireland, New Zealand, the United Kingdom and the US. The album broke multiple streaming records upon release, and was certified double Platinum by the Recording Industry Association of America (RIAA), for earning two million album-equivalent units in the US. On the US Billboard 200 Year-End chart for 2019, Thank U, Next became the second best-performing album in the country. Globally, it was the eighth best-selling album of 2019 and fourth best-selling album by a female artist.\n\nUpon its release, Thank U, Next received universal acclaim from music critics, with many praising the production and its cohesiveness. In support of both Sweetener and Thank U, Next, Grande embarked on the Sweetener World Tour, beginning on March 18, 2019. The concert tour grossed $146.4 million from 97 shows. Thank U, Next was nominated for Album of the Year and Best Pop Vocal Album at the 62nd Annual Grammy Awards (2020), while its single "7 Rings" was nominated for Record of the Year and Best Pop Solo Performance at the same awards ceremony. The album was ranked in several year-end and decade-end best music lists. 	{Friends,Personal,Night-time,Stressed,Cheerful,Inspiring}
14	Mylo Xyloto	Coldplay	Mylo Xyloto (pronounced "Mylou Zyletou") is the fifth studio album by British rock band Coldplay, released in late October 2011. The band worked closely with producer Brian Eno following their successful collaboration on Viva la Vida or Death and All His Friends, the band's previous album.\n\nMylo Xyloto is a concept album and a thematic rock opera. The album tells the story of a war against sound and colour by a supremacist government, set in the world of Silencia, an Orwellian society. Silencia has been overtaken by a government led by Major Minus, who controls the population through media and propaganda. His aim is to take sound and colour off the streets in hope to draw away "feeders", creatures that use such energy to hunt its prey. The album follows Mylo, a "silencer", a soldier in an army tasked to hunt and track down "sparkers", people who harness light and energy and use it to create sparks, comparable to graffiti in real life. He encounters Xyloto, the sparker most wanted by Major Minus. Through Xyloto, Mylo discovers his sparker abilities and his affiliation with the Car Kids, a major sparker faction founded by Mylo's parents, Aiko and Lela. Drummer Will Champion has noted that the album is a story of the characters "falling in love and trying to escape together", with a general theme of "love conquering all".	{Relaxing,Melancholy,Driving,Cheerful,Family,Inspiring}
8	Dangerous Woman	Ariana Grande	Dangerous Woman is the third studio album by American singer Ariana Grande, released by Republic Records on May 20, 2016. The album features guest appearances from Nicki Minaj, Lil Wayne, Macy Gray and Future. Dangerous Woman is primarily a pop and R&B record, with influences of dance-pop, disco, house, trap, and reggae genres. Grande, Max Martin, and Savan Kotecha were the album's executive producers. The album was originally called Moonlight after the opening track on the album, with the song "Focus", released as a single in 2015, being the intended lead single. However, the album's name was later changed to Dangerous Woman, with "Focus" being removed from the album's standard track listing, though it remained as a bonus track on the Japanese deluxe edition of the album.\n\nDangerous Woman debuted at number two on the US Billboard 200, with 175,000 album-equivalent units in its first week, of which 129,000 come from pure sales. It was Grande's first album to not reach number one in the US. However, it became her first number one album in the UK. It also reached number one in Australia, Brazil, Italy, Ireland, New Zealand and Spain. In October 2016, Dangerous Woman was certified Platinum by the Recording Industry Association of America (RIAA). "Dangerous Woman", was released on March 11, 2016 and peaked at number eight on the Billboard Hot 100. The following singles, "Into You", "Side to Side" and "Everyday", peaked at numbers 13, 4 and 55 on the Hot 100, respectively.\n\nDangerous Woman received positive reviews from critics, appearing on the year-end lists of several publications. It received a Grammy nomination for Best Pop Vocal Album. To promote the album, Grande embarked on a worldwide concert tour entitled the Dangerous Woman Tour, starting on February 3, 2017 and ending on September 21, 2017. This tour was interrupted on May 22, 2017 due to a suicide bombing attack at the end of Grande's concert on Manchester Arena. Grande organized the benefit concert One Love Manchester on June 4, 2017 to help the victims and families affected by the bombing.	{Youthful,Inspiring,Workout,Dance,Friends}
9	My Everything	Ariana Grande	My Everything is the second studio album by American singer Ariana Grande, released on August 25, 2014 by Republic Records. Grande wanted My Everything to sound as "an evolution" from her debut album, Yours Truly (2013); it explores more mature themes and music genres. In the album's production, Grande worked with a host of producers and co-writers – including Max Martin, Shellback, Benny Blanco, Ryan Tedder, Darkchild, Ilya Salmanzadeh, Zedd, and David Guetta, to name a few. Upon its release, the album debuted atop the Billboard 200 albums chart in the United States, selling 169,000 copies in its first week there. It debuted at number one in Australia and Canada as well, and peaked in the top ten of twenty countries worldwide. As of June 2020, the album has sold 759,000 copies in the United States alone.\n\nMy Everything was preceded by the lead single "Problem", which features Australian rapper Iggy Azalea. After its release on April 28, 2014, the single debuted on the Billboard Hot 100 singles chart in the US at number three the week ending May 17, selling over 400,000 copies in its first week and eventually peaking at number two. "Break Free", featuring German-Russian musician and producer Zedd, was released as the second single on July 2, and peaked at number four on the Hot 100. The fourth single, "Love Me Harder", with Canadian recording artist The Weeknd, was released on September 30, 2014 and eventually peaked at number seven in the US, while final single "One Last Time" reached number thirteen. At the 57th Annual Grammy Awards in 2015, My Everything was nominated for Best Pop Vocal Album.	{Melancholy,Personal,Walking,Night-time,Lost}
17	A Rush of Blood to the Head	Coldplay	A Rush of Blood to the Head is the second studio album by British rock band Coldplay. It was released on 26 August 2002 by Parlophone in the United Kingdom, and a day later by Capitol Records in the United States. Recording started after the band became popular worldwide with the release of their debut album Parachutes (2000), and one of its singles in particular, "Yellow". The album was produced by the band and Ken Nelson, and makes greater use of the electric guitar and piano than its predecessor.\n\nThe album topped the UK Albums Chart upon its first week of release in the United Kingdom, and became the eighth biggest-selling album of the 21st century in the UK. The British Phonographic Industry has since certified the album 9× Platinum for its accumulated sales of over 2.9 million units in the UK and the album has sold 14 million copies worldwide. The album spawned the hit singles "In My Place", "The Scientist", and "Clocks". "God Put A Smile Upon Your Face" was also released, but was significantly less successful.	{Night-time,Personal,Melancholy,Walking}
15	Viva La Vida or Death and All His Friends	Coldplay	Viva la Vida or Death and All His Friends, often referred to as simply Viva la Vida, is the fourth studio album by British rock band Coldplay, released on 12 June 2008 on the Parlophone label. The album was named after a Spanish phrase that best translates into English as "Long live life". Lyrically, the album contains references to love, life, death and war.\n\nRecording sessions for the album took place during June 2007 to April 2008 and featured production by Jon Hopkins, Rik Simpson, Markus Dravs, and Brian Eno. The album was Coldplay's first to be produced by Eno, and also their first album to not be produced by long-time Coldplay producer, Ken Nelson. The band forced themselves to explore new styles, as Eno required every song on the album to sound different. Development of the album delayed the release date several times. The album cover of Viva la Vida is the painting Liberty Leading the People by Eugène Delacroix.\n\nViva la Vida was both a critical and commercial success. Five songs were released in promotion of the album; "Violet Hill" and "Viva la Vida" in May 2008, "Lovers in Japan" and "Lost!" in November 2008, and "Strawberry Swing" in September 2009. "Viva la Vida" became the band's first song to reach number one in both the United States and the United Kingdom. It won Best Rock Album at the 2009 Grammy Awards and was also nominated for Album of the Year. It was the best selling album of 2008. By 2011, the album had sold more than 10 million copies. Viva la Vida was re-released on 25 November 2008 in a deluxe edition containing the original album and the Prospekt's March EP, which contained another hit, "Life in Technicolor II".	{Traveling,Cheerful,Friends,Driving,Relaxing}
\.


--
-- Data for Name: songwriter; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.songwriter (id, name, years_active, company, associated_acts) FROM stdin;
3	Hitman Bang	1994-present	Big Hit Entertainment	JYP, BTS, TXT
4	Social House	2015-present	School Boy	Ariana Grande, Lil Yachty
5	Tommy Brown	2008-present	Vietom	Ariana Grande, Victoria Monet
6	Max Martin	1985-present	Jive	Ali Payami, Britney Spears, Rami Yacoub, Kristian Lundin
7	Rik Simpson	1989-present	N/A	Coldplay, The Darktones
9	Markus Dravs	1992-present	N/A	Arcade Fire, Coldplay, Mumford & Sons, Bjork
8	Stargate	1996-present	RCA	Rihanna, Beyonce, Ne-Yo, Coldplay, Sam Smith, Katy Perry, Khalid
2	Pdogg	2007-present	Big Hit Entertainment	BTS
1	Dave Stewart	2019-present	N/A	BTS
\.


--
-- Name: artists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.artists_id_seq', 4, true);


--
-- Name: bio_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.bio_id_seq', 12, true);


--
-- Name: discography_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.discography_id_seq', 18, true);


--
-- Name: songs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.songs_id_seq', 18, true);


--
-- Name: songwriter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.songwriter_id_seq', 9, true);


--
-- Name: artists artists_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_name_key UNIQUE (name);


--
-- Name: artists artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.artists
    ADD CONSTRAINT artists_pkey PRIMARY KEY (id);


--
-- Name: bio bio_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.bio
    ADD CONSTRAINT bio_pkey PRIMARY KEY (id);


--
-- Name: discography discography_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.discography
    ADD CONSTRAINT discography_pkey PRIMARY KEY (id);


--
-- Name: songs songs_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_pkey PRIMARY KEY (id);


--
-- Name: songs songs_title_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songs
    ADD CONSTRAINT songs_title_key UNIQUE (title);


--
-- Name: songwriter songwriter_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.songwriter
    ADD CONSTRAINT songwriter_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

