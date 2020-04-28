import React from 'react';
import styled from 'styled-components/macro';

function Monogram({ highlight, ...props }) {

  return (
    <MonogramWrapper aria-hidden width="45" height="45" viewBox="0 0 16000 16000" {...props}>
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64bbe8"/>
          <stop offset="80%" stopColor="#c5aed3"/>
        </linearGradient>
        <clipPath id="monogram-clip">
          <path d="m7770 15630c-115-9-509-58-565-70-22-5-105-18-185-30-454-67-944-183-1200-285-47-18-150-59-230-90-421-165-851-373-1192-576-131-79-160-97-308-196-198-131-192-128-275-187-674-487-1277-1098-1780-1806-95-134-120-170-145-211-14-23-47-77-75-119-27-43-59-93-69-112-128-220-175-307-276-508-341-680-443-958-616-1674-121-503-163-776-185-1221-18-348-1-1120 31-1475 46-495 269-1354 495-1900 31-74 70-171 88-215 17-44 95-208 173-365 121-245 179-353 296-550 40-67 218-338 257-390 305-411 307-414 448-578 370-429 864-891 1278-1192 41-30 92-68 113-84 33-25 257-181 285-198 360-221 524-313 797-448 406-201 859-378 1245-488 61-17 158-45 216-62 255-72 637-147 939-185 472-58 1331-63 1840-9 193 20 539 77 725 119 242 55 663 174 810 229 50 18 115 41 145 51s60 21 65 25c6 4 44 19 85 33 170 59 373 149 675 298 454 224 766 410 1130 672 322 231 552 433 910 798 457 466 700 772 1033 1302 34 54 62 100 62 102s22 39 48 82c213 343 480 901 537 1120 23 88 20 255-6 339-29 95-40 114-112 190-111 119-210 178-468 279-159 62-359 144-489 200-47 20-139 58-205 85s-192 79-280 115c-88 37-171 70-185 75-22 6-108 42-427 176-45 19-84 34-88 34-3 0-30 11-58 24-149 68-306 133-422 175l-130 46h-170c-190 0-206-5-305-84-118-94-181-190-300-457-82-185-213-429-272-509-16-22-46-67-67-100s-59-83-85-111c-25-29-46-55-46-59 0-21-219-259-353-383-121-113-139-127-339-278-208-157-568-364-788-454-30-12-80-33-111-46s-61-24-66-24c-6 0-30-9-54-19-146-65-651-182-861-201-146-13-645-13-768 0-145 16-467 85-645 139-241 73-390 131-605 237-225 110-309 159-552 326-263 180-606 509-791 758-82 111-161 223-193 275-17 28-61 97-96 155-120 194-192 352-277 610-88 267-159 563-197 826-26 171-26 679-1 848 37 248 115 582 189 806 229 700 687 1325 1319 1800 113 85 242 168 394 254 548 311 1225 485 1886 486 368 0 794-78 1253-230 67-22 130-44 141-50 11-5 54-23 95-40 72-30 159-75 335-172 191-105 497-331 700-517 101-92 343-346 383-403 15-20 66-88 113-150s95-129 107-148c50-84 141-252 177-330 22-47 80-166 129-265 84-171 93-184 170-261 61-60 101-90 161-120l80-39 165 1c163 1 166 1 265 37 55 19 172 67 260 105 194 85 372 158 1165 477 478 192 611 249 825 356 275 136 320 164 411 261 84 89 98 129 102 295 4 124 1 152-17 215-21 69-56 166-86 233-122 279-279 589-413 820-23 39-53 93-68 120-14 28-41 70-58 95-35 50-49 72-71 112-19 33-238 347-297 424-24 31-52 69-63 83-295 395-930 1034-1330 1341-18 14-58 45-90 70-84 65-206 154-315 228-52 36-115 80-140 97-224 155-737 434-1049 572-69 30-160 70-201 88s-93 38-115 45-44 16-49 21c-6 5-18 9-27 9s-41 11-70 24c-98 43-438 150-689 217-217 58-378 92-650 138-547 93-777 112-1334 109-226 0-454-4-506-8zm1065-1175c270-32 577-78 760-115 306-63 356-75 644-162 233-71 339-109 626-230 210-89 628-304 780-403 28-18 61-38 75-45 57-29 396-261 544-373 527-401 1018-938 1453-1592 229-345 328-524 321-583-4-33-58-61-303-158-93-37-269-108-390-157-291-118-411-166-465-187-25-9-56-21-70-27-62-25-78-24-93 4-20 37-79 149-164 313-95 182-181 339-204 372-11 14-19 30-19 34 0 19-226 365-329 504-31 41-68 93-83 115s-47 63-70 92c-24 28-72 87-107 130-309 379-775 815-1191 1114-326 234-480 327-811 492-230 114-332 158-653 282-78 30-379 128-532 174-477 140-984 213-1600 228l-289 7 75 17c113 27 702 116 1035 158 128 16 914 13 1060-4zm-1434-1380c195-22 393-51 564-85 83-16 164-31 180-33 27-4 27-4-7-6-86-3-515-58-634-80-124-24-377-83-459-107-49-14-99-28-110-31-175-43-624-212-805-303-182-91-265-141-495-294-356-237-412-282-729-595-258-256-395-407-522-577-385-517-630-1017-828-1689-110-374-152-740-150-1325 0-458 20-672 89-968 53-230 172-617 216-704 11-21 19-44 19-52 0-47 331-717 383-774 9-10 17-22 17-26 0-5 39-67 87-140 378-570 920-1102 1468-1441 173-108 630-342 815-419 205-85 369-143 569-202 155-45 552-104 861-127l285-22-190-43c-295-67-567-102-953-122-298-16-698 7-983 55-109 19-445 101-569 140-214 66-343 111-436 151-56 24-106 44-112 44-34 0-548 254-700 345-9 6-39 23-67 40-42 24-117 74-249 165-372 256-855 741-1168 1174-79 108-298 440-298 451 0 2-18 34-40 71-51 82-274 535-290 589-7 22-16 45-20 50-5 6-15 35-23 65s-27 93-41 140c-32 107-115 410-126 464-65 323-94 476-101 551-6 50-12 281-15 515-7 521 4 692 66 1e3 51 255 171 716 222 855 26 70 123 296 158 365 21 41 41 86 45 98 4 13 22 49 40 80 17 32 67 118 110 192s108 179 144 234c36 54 71 106 76 115 6 9 37 54 70 100s67 94 75 107c88 132 292 364 496 565 181 176 496 449 520 449 3 0 23 15 44 33 87 76 356 250 539 349 199 108 381 194 571 270 453 181 1122 338 1530 359 207 10 703 1 861-16zm5478-7514c327-127 395-154 521-207 74-31 167-69 205-84 63-25 192-84 315-143 71-34 120-68 120-84 0-17-85-189-128-258-17-27-51-84-75-125-25-41-77-122-117-180-39-58-92-134-116-170-290-425-648-825-1064-1190-163-143-395-320-670-509-56-39-319-201-326-201-2 0-21-11-42-23-143-91-711-368-822-402-14-4-34-14-45-21-11-8-28-14-37-14-10 0-26-4-36-9-55-31-573-181-797-231-49-12-128-30-174-41-152-36-378-73-604-99-613-71-1375-37-1942 86-241 52-339 76-348 84-4 4 173 10 395 14 420 8 577 19 836 61 430 70 935 217 1372 401 289 121 587 271 810 407 63 39 138 85 165 101 70 43 268 180 340 236 33 26 101 77 150 115 177 136 392 331 642 582 291 293 543 606 759 943 37 58 89 138 116 179 26 41 48 78 48 82 0 5 16 33 35 64 19 30 40 66 45 79 5 14 20 42 33 63s65 119 116 218c132 254 171 325 183 325 6 0 67-22 137-49z"/>
        </clipPath>
      </defs>
      <rect clipPath="url(#monogram-clip)" fill="url(#linear)" width="100%" height="100%" />
      {highlight &&
        <g clipPath="url(#monogram-clip)">
          <MonogramHighlight className="monogram__highlight" width="100%" height="100%" />
        </g>
      }
    </MonogramWrapper>
  );
}

const MonogramWrapper = styled.svg`
  fill: rgb(var(--rgbText));
`;

const MonogramHighlight = styled.rect`
  fill: rgb(var(--rgbAccent));
  opacity: 0;
  transform: scale3d(1, 0, 1);
  transform-origin: top;
  transition:
    transform 0.4s var(--curveFastoutSlowin),
    opacity 0.1s ease 0.4s;

  a:focus &,
  a:hover &,
  ${/* sc-selector */MonogramWrapper}:hover & {
    opacity: 1;
    transform: scale3d(1, 1, 1);
    transform-origin: bottom;
    transition:
      transform 0.4s var(--curveFastoutSlowin),
      opacity 0.1s ease;
  }
`;

export default Monogram;
