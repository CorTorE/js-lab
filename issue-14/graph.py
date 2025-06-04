import pandas as pd
import matplotlib.pyplot as plt

# CSV 불러오기
object_df = pd.read_csv("issue-14/object.csv")
map_df = pd.read_csv("issue-14/map.csv")

# 시각화
plt.figure(figsize=(14, 6))

# plt.plot(object_df['insert'], label='Object Insert')
# plt.plot(map_df['insert'], label='Map Insert')

# plt.plot(object_df['read'], label='Object Read')
# plt.plot(map_df['read'], label='Map Read')

plt.plot(object_df['delete'], label='Object Delete')
plt.plot(map_df['delete'], label='Map Delete')

plt.xlabel("Iteration")
plt.ylabel("Time (ms)")
plt.title("Object vs Map Performance (Insert / Read / Delete)")
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.show()
