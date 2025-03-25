# Prescription Scanner with OpenFDA Allergy Cross-Check

**Built at HackRU 2025**  
A mobile app that scans prescription labels and checks drug safety for users with allergies or sensitivities using the OpenFDA database.

---

## What It Does

This app uses your phone’s camera to capture a photo of a prescription label, extracts the **NDC (National Drug Code)** via **OCR + Regex**, and queries the **OpenFDA** API to identify:

- Drug name
- Active and inactive ingredients
- Potential allergens based on user profile

If any risky ingredients are found, the user is **alerted in real-time**.

---

## Tech Stack

| Component         | Tech Used                  |
|------------------|----------------------------|
| Frontend      | Expo + React Native        |
| OCR           | Google Cloud Vision API    |
| Backend       | AWS Lambda                 |
| Data Source   | OpenFDA Drug Label API     |
| Auth (optional) | Supabase / Firebase (TBD)  |

---

## How It Works

1. **Snap a photo** of your prescription.
2. OCR + Regex extracts the NDC number.
3. The NDC is passed to an **AWS Lambda** function.
4. The Lambda serverlessly queries **OpenFDA** for that drug.
5. The app checks the ingredients list against user allergies.
6. You get an instant **visual alert** if a match is found!

---

## Example

Scanned: `NDC 12345-6789`  
Found: **Amoxicillin**  
Warning: Contains penicillin — user allergic.


## Team

- **Jordan Shamai** – Full Stack, OCR, AWS Lambda, Supabase, Gamma
- **Aaron Wu** - Full Stack, AWS Lambda, Supabase
- **Srihan Kakarlapudi** - Full Stack, AWS Lambda, Gamma, R Studio

---

## Future Improvements

-  Auto-highlight allergens in ingredient list
-  Manual override if OCR fails
-  Support for multiple languages
-  User profiles and persistent allergy history
---

## Why It Matters

Every year, thousands of adverse reactions are caused by patients unknowingly taking drugs with known allergens. This app helps:

 Reduce preventable ER visits  
 Empower patients with better information  
 Make medication safer — one scan at a time.

---

## Contact

**Jordan Shamai**  
jordan.shamai04@gmail.com  
https://github.com/jordanshamai/

---

Built with love ❤️ and code at HackRU25 🚀

