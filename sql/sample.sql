    CREATE DATABASE test002;
    USE createtb_db;
    CREATE TABLE name_age_list(
    id INT(11) AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL ,
    age INT(3) NOT NULL,
    PRIMARY KEY (id));

    insert into test001 values (1, 'Yamada', 'Tokyo');
-- テーブル作成
create table user (id int, name varchar(10), address varchar(10));
-- データの追加
insert into user values (1, 'Yamada', 'Tokyo');
-- テーブル内容の確認
select * from user;
-- idカラムとnameカラムに値指定

insert into user (id, name) values (2, 'Suzuki');
-- テーブル削除
mysql > DROP TABLE [テーブル名]

-- autoincrement設定
CREATE TABLE db_name.tbl_name
  (col_name data_type AUTO_INCREMENT, ... , INDEX (col_name))
  AUTO_INCREMENT = value
create table テーブル名(id int auto_increment, name varchar(10), index(id)) auto_increment = 20;

insert into user values(1, 'Yamada', '20', 'Tokyo');
insert into user(name)valuew('Nakano');
