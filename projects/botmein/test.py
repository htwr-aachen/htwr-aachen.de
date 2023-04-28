import requests

from tokenParser import TokenHTMLParser

HSZ_ANMELDE_URL = "https://buchung.hsz.rwth-aachen.de/cgi/anmeldung.fcgi"
HSZ_REFERER_URL = "https://buchung.hsz.rwth-aachen.de/angebote/aktueller_zeitraum"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54"



def test_hsz_anmeldung(kursID: str):
    payload = f'BS_Kursid_{kursID}=buchen'
    headers = {
        'User-Agent': USER_AGENT,
        'Referer': HSZ_REFERER_URL,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.post(
        HSZ_ANMELDE_URL, headers=headers, data=payload)

    prs = TokenHTMLParser()
    prs.feed(response.text)
    
    # Parse HTML and get FID
    print(prs.fid)
    print(prs.password)
    
    
    
test_hsz_anmeldung("196325")