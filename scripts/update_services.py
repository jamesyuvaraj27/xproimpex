import re

with open('f:/xproimpex/src/data/services.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
current_id = None
for line in lines:
    id_match = re.search(r"id:\s*'([^']+)'", line)
    if id_match:
        current_id = id_match.group(1)
    if 'image: null,' in line and current_id:
        img_block = f"    image: {{\n      src: '/images/services/{current_id}.jpg',\n      alt: '{current_id.replace('-', ' ').title()} - xproimpex',\n    }},\n"
        new_lines.append(img_block)
    else:
        new_lines.append(line)

with open('f:/xproimpex/src/data/services.ts', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Updated services.ts!')
