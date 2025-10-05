---
title: 'Portfolio'
date: 2023-10-24
type: landing

design:
  # Default section spacing
  spacing: "0rem"

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: resume-biography
    id: biography
    content:
      username: admin
    design:
      # Avatar customization 
      avatar:
        size: medium     # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle  # Options: circle (default), square, rounded
  - block: experience
    id: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: ":date_long"
      # Education or Experience section first?
      is_education_first: false
      spacing: 
        padding: ['4rem', '1.5rem', '4rem', '1.5rem']
  - block: skills
    id: skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      spacing: 
        padding: ['4rem', '1.5rem', '4rem', '1.5rem']
  - block: languages
    id: languages
    content:
      title: Languages
      username: admin
    design:
      spacing: 
        padding: ['4rem', '1.5rem', '4rem', '1.5rem']
---
