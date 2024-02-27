const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');

const languageMiddleware = require('./middlewares/language');
const connectDB = require('./database');
const mainRoutes = require('./routes/main');
const blogRoutes = require('./routes/blog');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const artworkRoutes = require('./routes/artwork');

// Configure dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: !true }
}));

app.use(languageMiddleware);

// Use routes
app.use(mainRoutes);
app.use(blogRoutes);
app.use(adminRoutes);
app.use(authRoutes);
app.use(apiRoutes);
app.use(artworkRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

app.get('/change-language', (req, res) => {
    const selectedLanguage = req.query.lang;
    if (selectedLanguage) {
        req.session.language = selectedLanguage;
    }

    res.redirect(req.headers.referer || '/');
});

app.use((req, res, next) => {
    res.locals.language = req.session.language || 'en'; // Default language is English
    next();
});
