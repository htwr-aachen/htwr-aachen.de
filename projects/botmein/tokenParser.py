from html.parser import HTMLParser


class TokenHTMLParser(HTMLParser):
  fid: str = ""
  password: str = ""
  
  def get_tokens(self) -> tuple[str,str]:
    return (self.fid, self.password)
  
  def handle_starttag(self, tag, attrs: list) -> None:
    if(tag == "input"):
      found = 0
      value = ""
      name = ""
      
      for attr in attrs:
        if(attr == None):
          continue
        if(attr[0] == "value"): 
          value = attr[1]
        if(attr[0] == "name"):
          name = attr[1]
        if(attr[0] == "type" and attr[1] == "password"):
          found = 2
          print("Found Password")
        if(attr[0] == "name" and attr[1] == "fid"):
          print("Found FID")
          found = 1
      if(found == 1):
        self.fid = value
      if(found == 2):
        self.password = name    
   
  def handle_startendtag(self, tag, attrs) -> None:
    self.handle_starttag(tag, attrs=attrs)