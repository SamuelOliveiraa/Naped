const express = require('express')
const route = express.Router()
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request-promise')
const { urlencoded } = require('express')

/* RENDERIZA O INDEX.EJS QUANDO NO CAMINHO DA URL NAO TIVER NADA                    */
route.get('/', async (req, res) => {
    try{
        const gameUrl = await request('https://www.einerd.com.br/secao/games/')
        const tvUrl = await request('https://www.einerd.com.br/secao/cinema-tv/')
        const curiositiesUrl = await request('https://www.einerd.com.br/secao/curiosidades/')
        const animesUrl = await request('https://www.einerd.com.br/secao/otaku/') 

        const games = cheerio.load(gameUrl)
        const tv = cheerio.load(tvUrl)
        const curiosities = cheerio.load(curiositiesUrl)
        const animes = cheerio.load(animesUrl)
        
        res.render('index',{
                            gamesText: games('.cat-layout .def .entry .text'),
                            gamesLink: games('.cat-layout .def .overlay a.thumb-overlay-small'),
                            gamesSrc: games('.cat-layout .def .overlay a img'),
                            gamesTitle: games('.cat-layout .def .entry h3'),
                            gamesData: games('.cat-layout .def .entry .entry-meta .entry-date'),
                            tvLink: tv('.cat-layout .def .overlay a.thumb-overlay-small'),
                            tvText: tv('.cat-layout .def .entry .text'),
                            tvSrc: tv('.cat-layout .def .overlay a img'),
                            tvTitle: tv('.cat-layout .def .entry h3'),
                            tvData: tv('.cat-layout .def .entry .entry-meta .entry-date'),
                            animesLink: animes('.cat-layout .def .overlay a.thumb-overlay-small'),
                            animesText: animes('.cat-layout .def .entry .text'),
                            animesSrc: animes('.cat-layout .def .overlay a img'),
                            animesTitle: animes('.cat-layout .def .entry h3'),
                            animesData: animes('.cat-layout .def .entry .entry-meta .entry-date'),
                            curiositiesText: curiosities('.cat-layout .def .entry .text'),
                            curiositiesSrc: curiosities('.cat-layout .def .overlay a img'),
                            curiositiesTitle: curiosities('.cat-layout .def .entry h3'),
                            curiositiesData: curiosities('.cat-layout .def .entry .entry-meta .entry-date'),
                            curiositiesLink: curiosities('.cat-layout .def .overlay a.thumb-overlay-small')
                        }
        )
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/animes', async (req,res) => {
    try{
        const animesUrl = await request('https://www.einerd.com.br/secao/otaku/') 
        const animesUrl2 = await request('https://www.einerd.com.br/secao/otaku/page/2/')

        const animes2 = cheerio.load(animesUrl2)
        const animes = cheerio.load(animesUrl)
        
        res.render('animes',{
                            animes2Link: animes2('.cat-layout .def .overlay a.thumb-overlay-small'),
                            animes2Text: animes2('.cat-layout .def .entry .text'),
                            animes2Src: animes2('.cat-layout .def .overlay a img'),
                            animes2Title: animes2('.cat-layout .def .entry h3'),
                            animes2Data: animes2('.cat-layout .def .entry .entry-meta .entry-date'),
                            animesText: animes('.cat-layout .def .entry .text'),
                            animesSrc: animes('.cat-layout .def .overlay a img'),
                            animesTitle: animes('.cat-layout .def .entry h3'),
                            animesData: animes('.cat-layout .def .entry .entry-meta .entry-date'),
                            animesLink: animes('.cat-layout .def .overlay a.thumb-overlay-small'),
                        }
        )
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/cinema-tv', async (req,res) => {
    try{
        const tv2Url = await request('https://www.einerd.com.br/secao/cinema-tv/page/2/')
        const tvUrl = await request('https://www.einerd.com.br/secao/cinema-tv/')

        const tv2 = cheerio.load(tv2Url)
        const tv = cheerio.load(tvUrl)
        
        res.render('cinema-tv',{
                            tv2Link: tv2('.cat-layout .def .overlay a.thumb-overlay-small'),
                            tv2Text: tv2('.cat-layout .def .entry .text'),
                            tv2Src: tv2('.cat-layout .def .overlay a img'),
                            tv2Title: tv2('.cat-layout .def .entry h3'),
                            tv2Data: tv2('.cat-layout .def .entry .entry-meta .entry-date'),
                            tvText: tv('.cat-layout .def .entry .text'),
                            tvSrc: tv('.cat-layout .def .overlay a img'),
                            tvTitle: tv('.cat-layout .def .entry h3'),
                            tvData: tv('.cat-layout .def .entry .entry-meta .entry-date'),
                            tvLink: tv('.cat-layout .def .overlay a.thumb-overlay-small')
                        }
        )
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/games', async (req,res) => {
    try{
        const gameUrl = await request('https://www.einerd.com.br/secao/games/')
        const gameUrl2 = await request('https://www.einerd.com.br/secao/games/page/2/')

        const games = cheerio.load(gameUrl)
        const games2 = cheerio.load(gameUrl2)
        
        res.render('games',{
                            gamesLink: games('.cat-layout .def .overlay a.thumb-overlay-small'),
                            gamesText: games('.cat-layout .def .entry .text'),
                            gamesSrc: games('.cat-layout .def .overlay a img'),
                            gamesTitle: games('.cat-layout .def .entry h3'),
                            gamesData: games('.cat-layout .def .entry .entry-meta .entry-date'),
                            games2Text: games2('.cat-layout .def .entry .text'),
                            games2Src: games2('.cat-layout .def .overlay a img'),
                            games2Title: games2('.cat-layout .def .entry h3'),
                            games2Data: games2('.cat-layout .def .entry .entry-meta .entry-date'),
                            games2Link: games2('.cat-layout .def .overlay a.thumb-overlay-small')
                        }
        )
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/curiosities', async (req,res) => {
    try{
        const curiositiesUrl2 = await request('https://www.einerd.com.br/secao/curiosidades/page/2/')
        const curiositiesUrl = await request('https://www.einerd.com.br/secao/curiosidades/')

        const curiosities2 = cheerio.load(curiositiesUrl2)
        const curiosities = cheerio.load(curiositiesUrl)
        
        res.render('curiosities',{
                            curiositiesLink: curiosities('.cat-layout .def .overlay a.thumb-overlay-small'),
                            curiositiesText: curiosities('.cat-layout .def .entry .text'),
                            curiositiesSrc: curiosities('.cat-layout .def .overlay a img'),
                            curiositiesTitle: curiosities('.cat-layout .def .entry h3'),
                            curiositiesData: curiosities('.cat-layout .def .entry .entry-meta .entry-date'),
                            curiosities2Text: curiosities2('.cat-layout .def .entry .text'),
                            curiosities2Src: curiosities2('.cat-layout .def .overlay a img'),
                            curiosities2Title: curiosities2('.cat-layout .def .entry h3'),
                            curiosities2Data: curiosities2('.cat-layout .def .entry .entry-meta .entry-date'),
                            curiosities2Link: curiosities2('.cat-layout .def .overlay a.thumb-overlay-small'),
                        }
        )
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/news/:id', async (req,res) => {
    try{
        const link = await request(`https://www.einerd.com.br/${req.params.id}`)
        const curiositiesUrl2 = await request('https://www.einerd.com.br/secao/curiosidades/page/2/')
        const animesUrl2 = await request('https://www.einerd.com.br/secao/otaku/page/2/')

        const animes2 = cheerio.load(animesUrl2)
        const url = cheerio.load(link)
        const curiosities2 = cheerio.load(curiositiesUrl2)
        console.log(url(' iframe'))
        
        res.render('news',{
                            url: url('.article-post-reading-area .article-post-content'),
                            urlTitle: url('header .entry-title'),
                            urlAuthor: url('header .entry-meta .entry-author a'),
                            urlData: url('header .entry-meta .entry-date'),
                            urlSrc: url('.article-post-reading-area .head-image img'),
                            urlPage: url('.article-post-content p, blockquote'),
                            $: url,
                            curiosities2Text: curiosities2('.cat-layout .def .entry .text'),
                            curiosities2Src: curiosities2('.cat-layout .def .overlay a img'),
                            curiosities2Link: curiosities2('.cat-layout .def .overlay a.thumb-overlay-small'),
                            animes2Text: animes2('.cat-layout .def .entry .text'),
                            animes2Src: animes2('.cat-layout .def .overlay a img'),
                            animes2Link: animes2('.cat-layout .def .overlay a.thumb-overlay-small')
        }
)
    }catch(err){
        res.render('error')
        if(err.response){
            res.render('error')
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.header)
        }else if(err.requiet){
            res.render('error')
            console.log(err.requiest)
        }else{
            res.render('error')
            console.log('Error', err.message)
        }
    }
})

route.get('/login', (req, res) =>{res.render('login')})
route.get('/criar-conta', (req, res) =>{res.render('create-account')})

route.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    res.render('error')
});

module.exports = route