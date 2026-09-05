import os
from PIL import Image, ImageDraw, ImageFont

os.makedirs('f:/xproimpex/public/images/services', exist_ok=True)

services_info = [
    ("iec-registration", "IEC Registration", "DGFT Import Export Code Certification"),
    ("aeo-certification", "AEO Certificate", "Authorized Economic Operator T1/T2/T3/LO"),
    ("dgft-consulting", "DGFT Consulting", "Foreign Trade Policy & Advisory Services"),
    ("icegate-registration", "ICEGATE & Customs EDI", "Digital Customs Gateway & Shipping Bills"),
    ("epc-rcmc-registration", "EPC / RCMC Registration", "Export Promotion Council Membership"),
    ("digital-signature-certificate", "Digital Signature (DSC)", "Class 3 Secure Trade Authentication"),
    ("epcg-scheme", "EPCG Scheme", "Export Promotion Capital Goods Licensing"),
    ("iso-certification", "ISO Certification", "ISO 9001 / 14001 / 22000 Standards"),
    ("certificate-of-origin", "Certificate of Origin", "Preferential & Non-Preferential COO"),
    ("advance-authorisation", "Advance Authorisation", "Duty-Free Raw Material Import Scheme"),
    ("export-house-certification", "Export House Recognition", "Status Holder One to Five Star Recognition"),
    ("rosctl", "RoSCTL Scheme", "Rebate of State & Central Taxes for Textiles"),
    ("fssai-certification", "FSSAI Food License", "Central & State Food Safety Registration"),
    ("rodtep", "RoDTEP Scheme", "Remission of Duties on Exported Products")
]

colors = [
    ((11, 37, 51), (14, 63, 82), (198, 146, 52)),
    ((10, 30, 45), (20, 80, 100), (212, 162, 71)),
    ((15, 45, 60), (12, 55, 75), (198, 146, 52)),
    ((9, 32, 44), (18, 70, 90), (220, 175, 85)),
]

width, height = 1200, 800

for i, (slug, title, subtitle) in enumerate(services_info):
    c1, c2, gold = colors[i % len(colors)]
    img = Image.new('RGB', (width, height), c1)
    draw = ImageDraw.Draw(img)
    
    # Draw subtle gradient
    for y in range(height):
        ratio = y / height
        r = int(c1[0] * (1 - ratio) + c2[0] * ratio)
        g = int(c1[1] * (1 - ratio) + c2[1] * ratio)
        b = int(c1[2] * (1 - ratio) + c2[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Draw geometric global trade lines
    for line_idx in range(12):
        y_pos = int(height * (line_idx + 1) / 13)
        draw.line([(0, y_pos), (width, y_pos + 120)], fill=(255, 255, 255, 10), width=1)
        draw.line([(0, y_pos + 120), (width, y_pos)], fill=(gold[0], gold[1], gold[2]), width=1)
        
    # Draw decorative card overlay
    card_margin_x, card_margin_y = 100, 120
    draw.rounded_rectangle(
        [(card_margin_x, card_margin_y), (width - card_margin_x, height - card_margin_y)],
        radius=24,
        outline=gold,
        width=2,
        fill=(10, 26, 34)
    )
    
    # Header tag
    draw.rounded_rectangle(
        [(150, 170), (480, 220)],
        radius=8,
        fill=gold
    )
    
    # Draw decorative gold accent bar
    draw.rectangle([(150, 260), (220, 266)], fill=gold)
    
    out_path = f"f:/xproimpex/public/images/services/{slug}.jpg"
    img.save(out_path, "JPEG", quality=92)
    print(f"Created {out_path}")

print("All 14 placeholder images successfully created!")
