from PIL import Image
import os

paths = [
    ('hero', 'public/images/hero.webp'),
    ('featured1', 'public/images/featured1.webp'),
    ('featured2', 'public/images/featured2.webp'),
    ('featured3', 'public/images/featured3.webp'),
    ('featured4', 'public/images/featured4.webp'),
    ('mahakaleshwar-hero', 'public/images/mahakaleshwar-hero.webp'),
    ('how-to-reach', 'public/images/how-to-reach-ujjain.webp'),
    ('kumbh-locations', 'public/images/kumbh-locations.webp'),
    ('bhasma-arti', 'public/images/bhasma-arti.webp'),
    ('mahakal-darshan', 'public/images/mahakal-darshan.webp'),
    ('shahi-sawari', 'public/images/mahakal-shahi-sawari.webp'),
    ('sawan-2026-ujjain', 'public/images/sawan-2026-ujjain.webp'),
    ('sawan-2026', 'public/images/sawan-2026.webp'),
    ('simhastha-2028', 'public/images/simhastha-2028.webp'),
    ('ujjain-to-om', 'public/images/ujjain-to-om.webp'),
    ('mahakal-visit', 'public/images/mahakal-visit-mistakes.webp'),
    ('baglamukhi', 'public/temple/baglamukhi.webp'),
    ('gopalmandir', 'public/temple/gopalmandir.webp'),
    ('omkareshwar', 'public/temple/omkareshwar.webp'),
    ('mahakal_temple', 'public/temple/mahakal.webp'),
    ('mangalnath', 'public/temple/mangalnath.webp'),
    ('harsiddhi', 'public/temple/harsiddhi.webp'),
    ('kalbhairav', 'public/temple/kalbhairav.webp'),
    ('ganeshmandir', 'public/temple/ganeshmandir.webp'),
    ('sandipani', 'public/temple/sandipaniashram.webp'),
]

for name, path in paths:
    with Image.open(path) as im:
        w, h = im.size
        size_bytes = os.path.getsize(path)
        size_kb = round(size_bytes / 1024, 1)
        print(f"{name}|{w}x{h}|{size_bytes}|{size_kb}KB")