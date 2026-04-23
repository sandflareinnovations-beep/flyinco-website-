const fs = require('fs');
const glob = require('glob');

const images = [
    'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1682687982501-1e58f813f22b?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1682695794816-7b9da18ed470?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1548262608-f40c749eb403?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1573843981267-be119a5e728f?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1533692328991-08159ff19fca?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1506460029314-ec0fb40b5401?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1525625299384-f58c42a27ef8?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000'
];

const files = glob.sync('src/**/*.jsx');
let imageIndex = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/https:\/\/picsum\.photos\/seed\/[a-zA-Z0-9]+\/\d+\/\d+/g, () => {
        const img = images[imageIndex % images.length];
        imageIndex++;
        return img;
    });

    if (content !== newContent) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log('Updated', file);
    }
}
console.log('Update complete');
