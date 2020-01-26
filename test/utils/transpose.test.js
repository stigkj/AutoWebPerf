/**
 * @license Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const transpose = require('../../src/utils/transpose');

describe('transpose test', () => {
  it('transposes an 2D array.', async () => {
    let array = [[1,1,1], [2,2,2], [3,3,3]];

    transpose(array);
    expect(array).toEqual([
      [1,2,3], [1,2,3], [1,2,3]
    ]);
  });

  it('transposes an 2D array twice and gets its original state.', async () => {
    let array = [[1,1,1], [2,2,2], [3,3,3]];

    transpose(array);
    transpose(array);

    expect(array).toEqual([
      [1,1,1], [2,2,2], [3,3,3]
    ]);
  });

});