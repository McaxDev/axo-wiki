# 互通服指令
## 格式说明
- 菱形括号内容代表必填变量，例如你想传送Steve，应该将`/tpa <玩家名>`当成`/tpa Steve`使用。
- 方形括号内容代表可选变量。

## 常用命令
- `/cd`: 打开菜单。
- `/tpa <玩家名>`: 发送一个传送请求给指定玩家。
- `/tpahere <玩家名>`: 发送一个传送请求，将指定玩家传送到你的位置。
- `/tpaccept`: 接受传送请求。
- `/buyclaimblocks <圈地币数量>`: 将金币兑换为圈地币。
- `/Trust <玩家名>`: 授予另一名玩家编辑你的领地的权限。
- `/UnTrust <玩家名>`: 收回另一名玩家编辑你的领地的权限。
- `/abandonclaim`: 删除你当前所在的领地。
- `/money`: 显示金币数量。
- `/pay <玩家名> <金额>`: 向其他玩家转账。
- `/slimefun guide`: 重新获得粘液科技指南。
- `/shop`: 打开商店。

## 以下为全部命令
### 玩家互传
- `/tpa [player]`: 发送一个传送请求给指定玩家。
- `/tpahere [player]`: 发送一个传送请求，将指定玩家传送到你的位置。
- `/tpahereall`: 发送一个传送请求，将所有玩家传送到你的位置。
- `/tpaccept`: 接受传送请求。
- `/tpatoggle`: 禁用/启用传送到你这里。
- `/tpatoggle [player]`: 禁用/启用传送到特定玩家。
- `/tpdeny`: 拒绝传送请求。
- `/back`: 将你传送回你的最后位置。
- `/tpcancel [player]`: 取消对特定玩家的传送请求。
- `/simpletpa`: 打开主菜单。

### 家（传送点）
- `/sethome`: 将当前位置设为你的家。
- `/home`: 传送到你设置的家那里。
- `/homes`: 列出我的所有家。
- `/deletehome`: 删除之前设置的家。

### 领地
- `/abandonclaim`: 删除你当前所在的领地。
- `/claimexplosions`: 切换当前的领地是否允许爆炸。
- `/trust`: 授予另一名玩家编辑你的领地的权限。
- `/untrust`: 收回另一名玩家编辑你的领地的权限。
- `/accesstrust`: 授予另一名玩家使用你的领地的按钮、拉杆和床的权限。
- `/containertrust`: 授予另一名玩家使用你领地的拉杆、床、容器、动物的权限。
- `/trustlist`: 列出你当前所在领地的授权列表。
- `/subdivideclaims`: 将你的铲子切换到划分模式，以便你可以细分你的子领地。
- `/restrictsubclaim`: 限制一个子领地，以免子领地从副领地继承授权信息。
- `/basicclaims`: 将你的铲子切换回基本圈地模式。
- `/permissiontrust`: 允许一个玩家向其他玩家分享他在你的领地拥有的权限。
- `/untrust all`: 在你的领地内收回所有玩家的所有权限。
- `/abandonallclaims`: 删除自己的所有领地。
- `/buyclaimblocks`: 将金币兑换为圈地币。
- `/sellclaimblocks`: 将圈地币兑换为金币。
- `/givepet`: 把自己驯服的宠物送给别人。
- `/claimslist`: 列出一名玩家的领地列表详细信息。
- `/ignoreplayer`: 屏蔽一名玩家的聊天信息。
- `/unignoreplayer`: 对一名玩家的聊天信息解除屏蔽。
- `/ignoredplayerlist`: 列出自己屏蔽的玩家列表。
- `/siege`: Besieges a player (disabled by default).
- `/trapped`: 将一名玩家从他被困到的领地里脱离。
- `/unlockdrops`: 允许其他玩家捡起你的死亡掉落物。

### 金币
- `/money`: 显示金币数量。
- `/pay [player] [money]`: 向其他玩家转账。
- `/balancetop`: 显示金币排行前十名。
- `/paytoggle`: 切换是否接受转账。
- `/xconomy help`: 查看经济功能的帮助。

### 粘液科技
- `/slimefun guide`: 重新获得粘液科技指南

### 服务器商店
- `/shop`: 打开商店。
- `/shop <section>`: 直接通过命令打开商店的特定部分，而无需先输入/shop再选择商店部分。
- `/sellall`: 卖出你背包里的所有物品。
- `/sellall <material>`: 卖出背包里所有指定材料的物品。
- `/sellall hand`: 卖出你当前手持的物品堆。
- `/sellgui [player]`: 打开一个空背包界面，用于放入并出售物品。关闭背包将完成交易，并退还无法出售的物品。
