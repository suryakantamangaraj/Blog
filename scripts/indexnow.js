const fs = require('fs');
const path = require('path');
const https = require('https');

const host = 'blog.suryaraj.com';
const key = '5c9dc5e270644fc283f943adf5673438';

const sitemapPath = path.join(__dirname, '../build/sitemap.xml');

// 1. Read the sitemap.xml
if (!fs.existsSync(sitemapPath)) {
    console.error('Sitemap not found at', sitemapPath);
    process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 2. Extract all the URLs
const urlRegex = /<loc>(.*?)<\/loc>/g;
const urlList = [];
let match;
while ((match = urlRegex.exec(sitemapContent)) !== null) {
    urlList.push(match[1]);
}

if (urlList.length === 0) {
    console.log('No URLs found in the sitemap to index.');
    process.exit(0);
}

console.log(`Found ${urlList.length} URLs in sitemap for IndexNow.`);

// 3. Send a POST request to IndexNow API
const payload = JSON.stringify({
    host: host,
    key: key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urlList
});

const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload)
    }
};

const req = https.request(options, (res) => {
    let responseData = '';

    res.on('data', (chunk) => {
        responseData += chunk;
    });

    res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log('Successfully submitted URLs to IndexNow!');
        } else {
            console.error(`IndexNow API error. Status Code: ${res.statusCode}`);
            console.error('Response:', responseData);
        }
    });
});

req.on('error', (error) => {
    console.error('Error sending request to IndexNow API:', error.message);
});

req.write(payload);
req.end();
