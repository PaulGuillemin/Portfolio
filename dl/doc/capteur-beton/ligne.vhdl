----------------------------------------------------------
-- Model Title: Modele ligne
-- Author: Paul Guillemin
-- Created: 01/12/2024
----------------------------------------------------------

library IEEE;
use IEEE.std_logic_1164.all;
use IEEE.ELECTRICAL_SYSTEMS.all;
use IEEE.math_real.all;

entity lignebetonF is

  generic (
    vph: real := 1.5E8; -- vitesse de phase dans la ligne
    epsr: real := 9.0; -- permittivite relative du materiau
    L: real := 1.0; -- longueur de la ligne en metres
    rd : real :=50.0e-2; -- distance entre les centres des cables
    ra : real :=5.0e-2; -- rayon d'un cable
    Z0:real:=377.0 -- impedance caracteristique dans le vide
  );
  port (
    terminal P1: ELECTRICAL;
    terminal P2: ELECTRICAL;
    terminal Masse: ELECTRICAL
  );
  
end entity lignebetonF;

architecture default of lignebetonF is
  quantity vi1: real := 0.0;
  quantity vr1: real := 0.0;
  constant td: real := L*sqrt(epsr)/3.0e8; -- Temps de propagation base sur la longueur et epsr
  quantity Zc: real; 
  quantity Zin: real;

begin
  vi2 == vi1'delayed(td); -- Propagation du signal incident avec un retard td
  vr1 == vr2'delayed(td); -- Propagation du signal reflechi avec un retard td
  cref == vr1/vi1; -- Coefficient de reflexion
  Zc == (1.0/3.14)*(Z0/sqrt(epsr))*(log((rd/ra) + sqrt((rd/ra)**2 - 1.0))); -- Calcul de l'impedance caracteristique
  Zin == V1/I1; -- Calcul de l'impedance d'entree

end architecture default;