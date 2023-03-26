import os
import shutil
import webbrowser

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def link(uri, label=None):
    if label is None: 
        label = uri
    parameters = ''

    # OSC 8 ; params ; URI ST <name> OSC 8 ;; ST 
    escape_mask = '\033]8;{};{}\033\\{}\033]8;;\033\\'

    return escape_mask.format(parameters, uri, label)

def title_bar(console_size_x: int = 80):
  
  bar = ""
  for i in range(console_size_x):
    bar+="*"
  print(bar)
  
  #greeter generation
  greeterText = "Welcome to the BotMeIn!"
  greeterGenerated = "***"
  hole = ""
  for i in range((console_size_x - 6 - len(greeterText)) // 2):
    hole += " ";
  greeterGenerated += hole
  greeterGenerated += greeterText
  greeterGenerated += hole
  if (console_size_x - 6 - len(greeterText)) % 2 == 1:
    greeterGenerated += " "
  greeterGenerated += "***"
  
  print(greeterGenerated)
  
  print(bar)
  
  
  

def botmein_cli():
  print("Hello World")
  
def options_cli():
  print("Hello World From Options")
  

def main():
  exitet = False
  (console_size_x,console_size_y) = shutil.get_terminal_size((80, 20))
  title_bar(console_size_x)
  
  while(not exitet):
    print("\n Select one of the following options:")
    print("\n[1] BotMeIn the Hochschulsport")
    print("[2] See the list of supported sports")
    print(f'[3] Automate the registration with the {link("https://www.htwr-aachen.de/botmein", "htwr-aachen.de/botmein website")}')
    print("[4] Exit")
    
    print("Please enter the number of the option you want to select: ", end="")
    try:
      option = int(input())
      
      if option == 1:
        botmein_cli()
      elif option == 2:
        options_cli()
      elif option == 3:
        print(f'\n\n\t {bcolors.OKGREEN}Opening the {link("https://www.htwr-aachen.de/botmein", "htwr-aachen.de/botmein website")} {bcolors.ENDC} \n')
        webbrowser.open("https://www.htwr-aachen.de/botmein")
      elif option == 4:
        exitet = True
      
    except ValueError:
      print(f'\n\n \t{bcolors.FAIL}Please enter a valid number! Frechheit {bcolors.ENDC} \n')
    
  
main()

