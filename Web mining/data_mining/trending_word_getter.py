import calendar
from requests_html import HTMLSession
c = calendar.TextCalendar(calendar.SUNDAY)
url_list = []
for x in range(2020,2021):
    for y in range(1,13):
        for z in c.itermonthdays(x,y):
            if z != 0:
                if y < 10:
                    month = '0'+str(y)
                else:
                    month = str(y)
                if z < 10:
                    day = '0'+str(z)
                else:
                    day = str(z)
                url = 'https://us.trend-calendar.com/trend/'+str(x)+'-'+month+'-'+day+'.html'
                url_list.append(url)
#print(url_list)

def get_webinfo(num,url):
    try:
        session = HTMLSession()
        r = session.get(url)
        sel1='#readmore1'
        result1 = r.html.find(sel1)
        sel2='#post-'+str(num)+' > div > ol:nth-child(3)'
        result2 = r.html.find(sel2)
        result = result1[0].text+'\n'+result2[0].text
        return result.replace('\n', ',').split(',')
    except Exception:
        return []
    
def identifyHashtag(ls):
    name_ls =[]
    for i in ls:
        if i[0] == '#':
            continue
        else:
            name_ls.append(i)
    return name_ls

start = 3282
#demo
url_list = url_list[:10]

name_ls = []
for i in url_list:
    ls = get_webinfo(start,i)
    start+=1
    name_tem = identifyHashtag(ls)
    name_ls = name_ls + name_tem
print(name_ls)
file = open("demo_trending_word.txt",'a')
for i in name_ls:
    file.write(str(i));
    file.write('\n');

file.close();
