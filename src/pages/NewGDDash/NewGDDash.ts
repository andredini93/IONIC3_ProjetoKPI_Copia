import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

import { Component, Input, OnInit, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';
import { Kpi } from '@gooddata/react-components';

interface KpiProps {
  measure: string;
  projectId: string;
  format?: string;
  filters?: any[];
  onLoadingChanged?: (any);
  onError?: (any);
}


@Component({
  template: 'NewGDDash.html'
})

export class NewGDDash  {
  
}