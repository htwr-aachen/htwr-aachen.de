import requests
from enum import Enum

from tokenParser import TokenHTMLParser

HSZ_ANMELDE_URL = "https://buchung.hsz.rwth-aachen.de/cgi/anmeldung.fcgi"
HSZ_REFERER_URL = "https://buchung.hsz.rwth-aachen.de/angebote/aktueller_zeitraum"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.54"


class Sex(Enum):
    M = 1,
    F = 2,
    D = 3,
    K = 4


class Status(Enum):
    StudentRWTH = 1,
    StudentFH = 2,
    StudentNRW = 3,
    StudentOther = 4,
    Azubi = 5,
    SchoolStudent = 6,
    WorkerRWTH = 7,
    WorkerFH = 8,
    WorkerUniklinik = 9,
    RWTHAlumni = 10,
    Extern = 11


class AnonymousConfig:
    Sex: Sex
    FirstName: str
    LastName: str
    Street: str
    PLZ: str
    Status: Status
    Email: str
    MatriculationNumber: str
    Telephone: str
    IBAN: str
    BIZ: str
    IBANOwner: str


class UserConfig(AnonymousConfig):
    Username: str
    Password: str
    KursId: str
    FID: str
    PasswordName: str

    def checkKursId(self):
        if not self.KursId:
            raise Exception("KursID is not set")
        pass

    def checkAccount(self) -> bool
      """checkAccount checks whether a account is used -> True or anonymous -> False should be used to book a course

        Raises:
            Exception: If no email and no iban is set
        """
      if self.Username and self.Password:
          return True
      elif self.IBAN and self.IBANOwner and self.FirstName and self.LastName and self.Street and self.PLZ:
          return False
      else:
          raise Exception("No account or anonymous config is set")


class Bot:
    config: UserConfig

    def __getFID(self):
        payload = f'BS_Kursid_{self.config.KursId}=buchen'
        headers = {
            'User-Agent': USER_AGENT,
            'Referer': HSZ_REFERER_URL,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        response = requests.post(
            HSZ_ANMELDE_URL, headers=headers, data=payload)

        prs = TokenHTMLParser()
        prs.feed(response.text)
        (self.config.FID, self.config.PasswordName) = prs.get_tokens()

        # Parse HTML and get FID

    def __init__(self, kurs_id: str) -> None:
        self.config.KursId = kurs_id
        pass

    def add_username_password_config(self, username: str, password: str):
        self.config.Username = username
        self.config.Password = password
        pass

    def add_anonymous_config(self, config: AnonymousConfig):

        pass

    def __book_anonymous(self):
        payload = f'sex={self.config.Sex.__str__()}&'
        payload += f'vorname={self.config.FirstName}&'
        payload += f'name={self.config.LastName}&'
        payload += f'strasse={self.config.Street}&'
        payload += f'ort={self.config.PLZ}&'
        payload += f'statusorig={self.config.Status.__str__()}&'
        payload += f'matnr={self.config.MatriculationNumber}&'
        payload += f'email={self.config.Email}&'
        payload += f'telefon={self.config.Telephone}'
        payload += f'iban={self.config.IBAN}'
        payload += f'biz={self.config.BIZ}'
        payload += f'kontoinh={self.config.IBANOwner}'
        payload += f'fid={self.config.FID}'
        payload += f'BS_Kursid_{self.config.KursId}=buchen'
        
        headers = {
            'User-Agent': USER_AGENT,
            'Referer': HSZ_REFERER_URL,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        
        response = requests.post(
            HSZ_ANMELDE_URL, headers=headers, data=payload)
        pass

    def __book_account(self):
        payload = f'pw_email={self.config.Username}&{self.config.PasswordName}={self.config.Password}&BS_Kursid_{self.config.KursId}=buchen&fid={self.config.FID}'
        headers = {
            'User-Agent': USER_AGENT,
            'Referer': HSZ_REFERER_URL,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        response = requests.post(
            HSZ_ANMELDE_URL, headers=headers, data=payload)

        pass

    def book(self):
    
        # kurs_id is not empty
        self.config.checkKursId()
    
        self.__getFID()
    
        if self.config.checkAccount():
            self.__book_account()
        else:
            self.__book_anonymous()
