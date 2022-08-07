
-- 通过*把users 所以数据查询出来
SELECT * from my_db01.users;

-- 只获取单独数据
select username, password from my_db01.users;

-- 插入新内容
insert into my_db01.users (username,password) value ('tony stark','098123'); 

-- update 用于修过表中的数据。set 新内容,新内容 where 条件（找谁）
update my_db01.users set password='88888' where username = 'zs';
update my_db01.users set password='admin123',status=1 where id=2;

-- delete 用于删除表数据.
delete from my_db01.users where id=3;

select * from my_db01.users where status=1;
select * from my_db01.users where id=2;
select * from my_db01.users where username<>'ls';

-- and 连接
select * from my_db01.users where status=1 and id=2;

-- or 或者
select * from my_db01.users where status=1 or id=1;

-- order by 排序 asc是升序默认也是升序  降序是desc
select * from my_db01.users order by status asc;
select * from my_db01.users order by id desc;

-- 先按照status 降序 再按username 顺序
select * from my_db01.users order by status desc ,username asc;

-- count(*) 统计
select count(*) from my_db01.users where status=0;

-- as 为列设置别名.
select count(*) as total from my_db01.users where status=0;

select username as namer,password as mm from my_db01.users;









