from main import posts
for i in range( 1, 11):
    print(i)
Mahmud = "Mahmud is black"
if Mahmud != "Mahmud is black":
    print("He Bleached")
else:
    print("True") 
    
for post in posts:
    title = post["title"]
    content = post["content"]
    
    print(f"Title: {title}")
    print(f"Content: {content}")
    
id_list = [1,2,3,4,5,6,]
for new_id in id_list:
    last_id = id_list[-1]
print(f"Last ID: {last_id + 1}")
id_list.append(last_id + 1)
print(id_list) 

# id_list = []
# for new_id in id_list:
#     last_id = id_list[-1]
#     if id_list == []:
#         new_id = 1
#         id_list.append(new_id)
#     else:
#         id_list.append(last_id + 1)
# print(id_list)