ALTER TABLE freedb_proyectosMolonesB2025.proyectos ADD COLUMN fk_autor INT;
ALTER TABLE freedb_proyectosMolonesB2025.proyectos ADD FOREIGN KEY (fk_autor) REFERENCES autor(id_autor);

UPDATE freedb_proyectosMolonesB2025.proyectos
SET fk_autor = 1
WHERE id_proyecto = 1;

UPDATE freedb_proyectosMolonesB2025.proyectos
SET fk_autor = 2
WHERE id_proyecto = 2;

UPDATE freedb_proyectosMolonesB2025.proyectos
SET fk_autor = 3
WHERE id_proyecto = 3;

UPDATE freedb_proyectosMolonesB2025.proyectos
SET fk_autor = 4
WHERE id_proyecto = 4;