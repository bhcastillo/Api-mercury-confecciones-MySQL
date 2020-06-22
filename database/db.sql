CREATE DATABASE api_mercury_confecciones;
USE api_mercury_confecciones;

CREATE TABLE products(
  id VARCHAR(11) NOT NULL,
  title VARCHAR(50) NOT NULL,
  color VARCHAR(50) NOT NULL,
  url VARCHAR(50) NOT NULL,
  buttonsPalette VARCHAR(50),
  description VARCHAR(200)
)

INSERT INTO products (id,title,color,url,buttonsPalette,description)
  VALUES
   ('ua101','Uniformes Administrativos','Verde','uniformesAdministrativos','colors',null),
   ('ua102','Uniformes Administrativos','Blanco','uniformesAdministrativos','colors',null),
   ('ua103','Uniformes Administrativos','Verde','uniformesAdministrativos','colors',null),
   ('ua104','Uniformes Administrativos','Lila','uniformesAdministrativos','colors',null),
   ('um101','Uniformes Médicos','Blanco','uniformesMedicos','colors',null),
   ('um102','Uniformes Médicos','Blanco','uniformesMedicos','colors',null),
   ('um103','Uniformes Médicos','Lila','uniformesMedicos','colors',null),
   ('um104','Uniformes Médicos','Verde','uniformesMedicos','colors',null),
   ('um105','Uniformes Médicos','Blanco','uniformesMedicos','colors',null),
   ('b101','Bordados','General','bordados',null,null),
   ('b102','Bordados','General','bordados',null,null),
   ('b103','Bordados','General','bordados',null,null),
   ('b104','Bordados','General','bordados',null,null),
   ('b105','Bordados','General','bordados',null,null),
   ('b106','Bordados','General','bordados',null,null),
   ('z101','Zapatos','Frontal','zapatos','arrows',null),
   ('z102','Zapatos','Frontal','zapatos','arrows',null),
   ('z103','Zapatos','Frontal','zapatos','arrows',null),
   ('z104','Zapatos','Frontal','zapatos','arrows',null),
   ('z105','Zapatos','Frontal','zapatos','arrows',null),
   ('z106','Zapatos','Frontal','zapatos','arrows',null)